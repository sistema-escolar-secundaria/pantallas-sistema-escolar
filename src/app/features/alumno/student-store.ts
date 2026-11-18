import { computed, inject, Injectable } from '@angular/core';
import { DEMO_STUDENT_ID, EXAMPLE_GRADES, STUDENT_ACTIVITIES } from '../../mock-data/student';
import { EVALUATIONS, LESSONS, MATERIALS } from '../../mock-data/teacher';
import { sectionLabel } from '../admin/admin-data';
import { AdminStore } from '../admin/admin-store';
import { DEMO_DAY, SCHOOL_YEAR, TERMS, Term } from '../docente/teacher-data';
import { TeacherStore } from '../docente/teacher-store';

export type GradeMode = 'example' | 'recorded';
export const GRADE_MODES: Record<GradeMode, string> = {
  example: 'Boleta de ejemplo',
  recorded: 'Notas registradas',
};

@Injectable({ providedIn: 'root' })
export class StudentStore {
  private readonly admin = inject(AdminStore);
  private readonly teacher = inject(TeacherStore);
  readonly student = computed(() =>
    this.admin.data().students.find((item) => item.id === DEMO_STUDENT_ID),
  );
  readonly enrollment = computed(() =>
    this.admin
      .data()
      .enrollments.find(
        (item) => item.studentId === this.student()?.id && item.year === SCHOOL_YEAR,
      ),
  );
  readonly placement = computed(() => {
    const enrollment = this.enrollment();
    return enrollment ? sectionLabel(this.admin.section(enrollment.sectionId)) : '';
  });
  readonly courses = computed(() =>
    this.teacher.assignments.filter((item) => item.sectionId === this.enrollment()?.sectionId),
  );
  private readonly courseIds = computed(() => new Set(this.courses().map((item) => item.id)));
  readonly lessons = computed(() =>
    LESSONS.filter((item) => this.courseIds().has(item.assignmentId)),
  );
  readonly upcoming = computed(() =>
    EVALUATIONS.filter((item) => this.courseIds().has(item.assignmentId) && item.date >= DEMO_DAY),
  );
  readonly materials = computed(() =>
    MATERIALS.filter((item) => this.courseIds().has(item.assignmentId)),
  );
  readonly activities = computed(() =>
    STUDENT_ACTIVITIES.filter((item) => this.courseIds().has(item.assignmentId)),
  );
  readonly recent = computed(() =>
    [...TERMS]
      .reverse()
      .flatMap((term) =>
        this.reportRows(term, 'recorded')
          .filter((row) => row.level)
          .map((row) => ({ ...row, term })),
      )
      .slice(0, 3),
  );

  courseName(id: string): string {
    return this.courses().find((item) => item.id === id)?.course ?? '';
  }

  reportRows(term: Term, mode: GradeMode) {
    return this.courses().flatMap((item) =>
      item.competencies.map((competency) => {
        const key = item.id + '/' + competency.id;
        const grade =
          mode === 'example'
            ? EXAMPLE_GRADES[term][key]
            : this.teacher.grades({ assignmentId: item.id, term, competencyId: competency.id })[
                DEMO_STUDENT_ID
              ];
        return {
          key,
          course: item.course,
          competency: competency.label,
          level: grade?.level ?? '',
          observation: grade?.observation ?? '',
        };
      }),
    );
  }
}
