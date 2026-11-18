import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ATTENDANCE,
  Attendance,
  attendanceKey,
  AttendanceRows,
  DEMO_DAY,
  GradeRows,
  gradeKey,
  LEVELS,
  Level,
  SCHOOL_YEAR,
  TERMS,
  Term,
  validSchoolDate,
} from './teacher-data';
import { TeacherStore } from './teacher-store';

@Component({
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './records.html',
  styleUrl: './teacher.scss',
})
export class Records {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly params = toSignal(this.route.queryParamMap, { requireSync: true });
  protected readonly store = inject(TeacherStore);
  protected readonly isGrades = this.route.snapshot.data['module'].path === 'notas';
  protected readonly states = ATTENDANCE;
  protected readonly levels = LEVELS;
  protected readonly terms = TERMS;
  protected readonly year = SCHOOL_YEAR;
  protected readonly date = signal(DEMO_DAY);
  protected readonly error = signal('');
  protected readonly message = signal('');
  protected readonly saving = signal(false);
  private readonly attendanceDraft = signal<Record<string, AttendanceRows>>({});
  private readonly gradeDraft = signal<Record<string, GradeRows>>({});

  protected readonly assignment = computed(
    () => this.store.assignment(this.params().get('curso') ?? '') ?? this.store.assignments[0],
  );
  protected readonly term = computed(() => {
    const value = this.params().get('bimestre') as Term;
    return TERMS.includes(value) ? value : '4';
  });
  protected readonly competency = computed(
    () =>
      this.assignment().competencies.find((item) => item.id === this.params().get('competencia')) ??
      this.assignment().competencies[0],
  );
  private readonly attendanceContext = computed(() => ({
    assignmentId: this.assignment().id,
    date: this.date(),
  }));
  private readonly gradeContext = computed(() => ({
    assignmentId: this.assignment().id,
    term: this.term(),
    competencyId: this.competency().id,
  }));
  protected readonly roster = computed(() => this.store.roster(this.assignment().id));
  protected readonly attendance = computed(() => ({
    ...this.store.attendance(this.attendanceContext()),
    ...this.attendanceDraft()[attendanceKey(this.attendanceContext())],
  }));
  protected readonly grades = computed(() => ({
    ...this.store.grades(this.gradeContext()),
    ...this.gradeDraft()[gradeKey(this.gradeContext())],
  }));
  protected readonly attendanceSummary = computed(() =>
    [...ATTENDANCE, ''].map((status) => ({
      label: status || 'Sin marcar',
      count: this.roster().filter((student) => (this.attendance()[student.id] ?? '') === status)
        .length,
    })),
  );
  protected readonly pendingGrades = computed(
    () => this.roster().filter((student) => !this.grades()[student.id]?.level).length,
  );
  protected readonly canSave = computed(
    () =>
      !!this.roster().length && (this.isGrades || validSchoolDate(this.date())) && !this.saving(),
  );

  protected select(queryParams: Record<string, string | null>): void {
    this.clearFeedback();
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  protected setDate(value: string): void {
    this.clearFeedback();
    this.date.set(value);
    if (!validSchoolDate(value)) this.error.set('Selecciona una fecha del año académico 2026.');
  }

  protected mark(studentId: string, value: string): void {
    this.clearFeedback();
    const key = attendanceKey(this.attendanceContext());
    this.attendanceDraft.update((drafts) => ({
      ...drafts,
      [key]: { ...drafts[key], [studentId]: value as Attendance | '' },
    }));
  }

  protected updateGrade(studentId: string, field: 'level' | 'observation', value: string): void {
    this.clearFeedback();
    const key = gradeKey(this.gradeContext());
    const current = this.grades()[studentId];
    const grade = {
      level: field === 'level' ? (value as Level | '') : (current?.level ?? ''),
      observation: field === 'observation' ? value : (current?.observation ?? ''),
    };
    this.gradeDraft.update((drafts) => ({
      ...drafts,
      [key]: { ...drafts[key], [studentId]: grade },
    }));
  }

  protected async save(): Promise<void> {
    if (!this.canSave()) return;
    this.clearFeedback();
    this.saving.set(true);
    try {
      if (this.isGrades) {
        const context = this.gradeContext();
        const key = gradeKey(context);
        await this.store.saveGrades(context, this.gradeDraft()[key] ?? {});
        this.gradeDraft.update((drafts) => ({ ...drafts, [key]: {} }));
      } else {
        const context = this.attendanceContext();
        const key = attendanceKey(context);
        await this.store.saveAttendance(context, this.attendanceDraft()[key] ?? {});
        this.attendanceDraft.update((drafts) => ({ ...drafts, [key]: {} }));
      }
      this.message.set(this.isGrades ? 'Notas guardadas.' : 'Asistencia guardada.');
    } catch (error) {
      this.error.set((error as Error).message);
    } finally {
      this.saving.set(false);
    }
  }

  private clearFeedback(): void {
    this.error.set('');
    this.message.set('');
  }
}
