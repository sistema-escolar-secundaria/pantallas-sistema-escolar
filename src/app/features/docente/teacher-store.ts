import { computed, inject, Injectable, signal } from '@angular/core';
import { sectionLabel } from '../admin/admin-data';
import { AdminStore } from '../admin/admin-store';
import { ASSIGNMENTS } from '../../mock-data/teacher';
import {
  ATTENDANCE,
  AttendanceContext,
  attendanceKey,
  AttendanceRows,
  DEMO_DAY,
  Evaluation,
  GradeContext,
  gradeKey,
  GradeRows,
  LEVELS,
  SCHOOL_YEAR,
  TERMS,
  validSchoolDate,
} from './teacher-data';

interface TeacherRecords {
  attendance: Record<string, AttendanceRows>;
  grades: Record<string, GradeRows>;
}

const KEY = 'sistema-escolar.teacher.v1';

@Injectable({ providedIn: 'root' })
export class TeacherStore {
  private readonly admin = inject(AdminStore);
  private readonly records = signal(this.readInitial());
  readonly assignments = ASSIGNMENTS;

  private readonly rosterBySection = computed(() => {
    const { students, enrollments } = this.admin.data();
    const byId = new Map(students.map((student) => [student.id, student]));
    return new Map(
      this.assignments.map(({ sectionId }) => {
        const ids = new Set(
          enrollments
            .filter((item) => item.year === SCHOOL_YEAR && item.sectionId === sectionId)
            .map((item) => item.studentId),
        );
        const roster = [...ids]
          .flatMap((id) => {
            const student = byId.get(id);
            return student ? [student] : [];
          })
          .sort((a, b) => a.name.localeCompare(b.name, 'es-PE'));
        return [sectionId, roster] as const;
      }),
    );
  });

  readonly studentCount = computed(
    () => new Set([...this.rosterBySection().values()].flat().map((student) => student.id)).size,
  );

  assignment(id: string) {
    return this.assignments.find((item) => item.id === id);
  }

  placement(sectionId: string): string {
    return sectionLabel(this.admin.section(sectionId));
  }

  contextLabel(assignmentId: string): string {
    const item = this.assignment(assignmentId)!;
    return item.course + ' · ' + this.placement(item.sectionId);
  }

  roster(assignmentId: string) {
    const item = this.assignment(assignmentId);
    return item ? (this.rosterBySection().get(item.sectionId) ?? []) : [];
  }

  attendance(context: AttendanceContext): AttendanceRows {
    return this.records().attendance[attendanceKey(context)] ?? {};
  }

  grades(context: GradeContext): GradeRows {
    return this.records().grades[gradeKey(context)] ?? {};
  }

  evaluationStatus(evaluation: Evaluation): 'Próxima' | 'Pendiente de calificar' | 'Calificada' {
    const rows = this.grades(evaluation);
    const roster = this.roster(evaluation.assignmentId);
    if (roster.length && roster.every((student) => rows[student.id]?.level)) return 'Calificada';
    return evaluation.date > DEMO_DAY ? 'Próxima' : 'Pendiente de calificar';
  }

  saveAttendance(context: AttendanceContext, rows: AttendanceRows): Promise<void> {
    const roster = this.roster(context.assignmentId);
    if (!roster.length || !validSchoolDate(context.date)) {
      throw new Error('Selecciona una clase con estudiantes y una fecha del año académico.');
    }
    const entries = roster.flatMap(({ id }) => {
      if (!Object.prototype.hasOwnProperty.call(rows, id)) return [];
      const status = rows[id];
      return [[id, status && ATTENDANCE.includes(status) ? status : null]];
    });
    return this.write('attendance', attendanceKey(context), Object.fromEntries(entries));
  }

  saveGrades(context: GradeContext, rows: GradeRows): Promise<void> {
    const assignment = this.assignment(context.assignmentId);
    const roster = this.roster(context.assignmentId);
    if (
      !roster.length ||
      !TERMS.includes(context.term) ||
      !assignment?.competencies.some((item) => item.id === context.competencyId)
    ) {
      throw new Error('Selecciona una clase con estudiantes, un bimestre y una competencia.');
    }
    const entries = roster.flatMap(({ id }) => {
      const grade = rows[id];
      if (!grade) return [];
      const observation = grade.observation.trim();
      const level = grade.level && LEVELS.includes(grade.level) ? grade.level : '';
      return [[id, level || observation ? { level, observation } : null]];
    });
    return this.write('grades', gradeKey(context), Object.fromEntries(entries));
  }

  private readInitial(): TeacherRecords {
    try {
      return this.readStored();
    } catch {
      return { attendance: {}, grades: {} };
    }
  }

  private readStored(): TeacherRecords {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as TeacherRecords) : { attendance: {}, grades: {} };
  }

  private async write<K extends keyof TeacherRecords>(
    type: K,
    key: string,
    rows: Record<string, TeacherRecords[K][string][string] | null>,
  ): Promise<void> {
    try {
      const commit = () => {
        const current = this.readStored();
        const merged = { ...current[type][key], ...rows };
        const saved = Object.fromEntries(
          Object.entries(merged).filter(([, value]) => value !== null),
        );
        const next = { ...current, [type]: { ...current[type], [key]: saved } };
        localStorage.setItem(KEY, JSON.stringify(next));
        this.records.set(next);
      };
      if (navigator.locks) {
        await navigator.locks.request(KEY, commit);
      } else {
        commit();
      }
    } catch {
      throw new Error('No se pudo guardar en el navegador. Tus cambios siguen pendientes.');
    }
  }
}
