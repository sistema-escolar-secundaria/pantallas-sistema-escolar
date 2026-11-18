import { Component, computed, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { SchoolModule } from '../../core/models/profile';
import { EVALUATIONS, LESSONS } from '../../mock-data/teacher';
import {
  ATTENDANCE,
  DEMO_DAY,
  SCHOOL_YEAR,
  validSchoolDate,
  WEEKDAYS,
} from '../docente/teacher-data';
import { TeacherStore } from '../docente/teacher-store';
import { sectionLabel, shortDate } from './admin-data';
import { AdminStore } from './admin-store';

type MonitoringKind = 'horarios' | 'asistencia' | 'evaluaciones';

const HEADERS: Record<MonitoringKind, string[]> = {
  horarios: ['Día', 'Horario', 'Asignatura', 'Sección'],
  asistencia: ['Estudiante', 'Código', 'Asignatura', 'Sección', 'Estado'],
  evaluaciones: ['Evaluación', 'Fecha', 'Asignatura', 'Sección', 'Bimestre', 'Estado'],
};

@Component({
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './monitoring.html',
})
export class Monitoring {
  protected readonly module = inject(ActivatedRoute).snapshot.data['module'] as SchoolModule;
  protected readonly kind = this.module.path as MonitoringKind;
  protected readonly headers = HEADERS[this.kind];
  protected readonly store = inject(AdminStore);
  private readonly teacher = inject(TeacherStore);
  protected readonly year = SCHOOL_YEAR;
  protected readonly section = signal('');
  protected readonly course = signal('');
  protected readonly status = signal('');
  protected readonly day = signal('');
  protected readonly date = signal(DEMO_DAY);
  protected readonly dateValid = computed(() => validSchoolDate(this.date()));
  protected readonly weekdays = WEEKDAYS;
  protected readonly sectionLabel = sectionLabel;
  protected readonly statuses = ['Próxima', 'Pendiente de calificar', 'Calificada'];
  protected readonly courseNames = [
    ...new Set(this.teacher.assignments.map((item) => item.course)),
  ];
  private readonly assignments = computed(() =>
    this.teacher.assignments.filter(
      (item) =>
        (!this.section() || item.sectionId === this.section()) &&
        (!this.course() || item.course === this.course()),
    ),
  );
  private readonly attendance = computed(() => {
    if (!this.dateValid()) return [];
    return this.assignments().flatMap((item) => {
      const marks = this.teacher.attendance({ assignmentId: item.id, date: this.date() });
      return this.teacher.roster(item.id).map((student) => ({
        id: item.id + '/' + student.id,
        cells: [
          student.name,
          student.code,
          item.course,
          this.teacher.placement(item.sectionId),
          marks[student.id] || 'Sin marcar',
        ],
      }));
    });
  });
  protected readonly summary = computed(() =>
    [...ATTENDANCE, 'Sin marcar'].map((label) => ({
      label,
      count: this.attendance().filter((row) => row.cells[4] === label).length,
    })),
  );

  protected readonly rows = computed(() => {
    if (this.kind === 'asistencia') return this.attendance();

    const byId = new Map(this.assignments().map((item) => [item.id, item]));
    if (this.kind === 'horarios') {
      return LESSONS.flatMap((lesson) => {
        const item = byId.get(lesson.assignmentId);
        if (!item || (this.day() && this.day() !== lesson.day)) return [];
        return [
          {
            id: lesson.day + lesson.start + item.id,
            cells: [
              lesson.day,
              lesson.start + '–' + lesson.end,
              item.course,
              this.teacher.placement(item.sectionId),
            ],
          },
        ];
      });
    }

    return EVALUATIONS.flatMap((evaluation) => {
      const item = byId.get(evaluation.assignmentId);
      const status = this.teacher.evaluationStatus(evaluation);
      if (!item || (this.status() && this.status() !== status)) return [];
      return [
        {
          id: evaluation.id,
          cells: [
            evaluation.title,
            shortDate(evaluation.date),
            item.course,
            this.teacher.placement(item.sectionId),
            evaluation.term + '.°',
            status,
          ],
        },
      ];
    });
  });
}
