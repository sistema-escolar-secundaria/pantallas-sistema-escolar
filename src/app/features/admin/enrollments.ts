import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { Enrollment, sectionLabel, shortDate, YEARS } from './admin-data';
import { AdminDocument, AdminDocumentData } from './admin-document';
import { AdminStore } from './admin-store';

@Component({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatStepperModule],
  templateUrl: './enrollments.html',
})
export class Enrollments {
  protected readonly store = inject(AdminStore);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);
  protected readonly creating = signal(false);
  protected readonly query = signal('');
  protected readonly studentId = signal('');
  protected readonly year = signal(YEARS[0]);
  protected readonly sectionId = signal('');
  protected readonly error = signal('');
  protected readonly years = YEARS;
  protected readonly sectionLabel = sectionLabel;
  protected readonly shortDate = shortDate;
  protected readonly students = computed(() =>
    this.store.data().students.filter((student) => this.store.matches(student, this.query())),
  );
  protected readonly records = computed(() => [...this.store.data().enrollments].reverse());
  protected readonly issue = computed(() =>
    this.store.enrollmentIssue(this.studentId(), this.year(), this.sectionId()),
  );
  protected readonly seats = computed(() => this.store.seats(this.sectionId(), this.year()));

  protected start(): void {
    this.query.set('');
    this.studentId.set('');
    this.year.set(YEARS[0]);
    this.sectionId.set('');
    this.error.set('');
    this.creating.set(true);
  }

  protected search(value: string): void {
    this.query.set(value);
    if (!this.students().some((student) => student.id === this.studentId())) this.studentId.set('');
  }

  protected confirm(): void {
    try {
      const enrollment = this.store.enroll(this.studentId(), this.year(), this.sectionId());
      this.creating.set(false);
      this.snack.open('Matrícula confirmada.', 'Cerrar', { duration: 4000 });
      this.document(enrollment);
    } catch (error) {
      this.error.set((error as Error).message);
    }
  }

  protected document(item: Enrollment): void {
    const student = this.store.student(item.studentId);
    const data: AdminDocumentData = {
      title: 'Constancia de matrícula',
      simulated: true,
      fields: [
        ['Código', item.id],
        ['Estudiante', student.name],
        ['Año académico', String(item.year)],
        ['Grado y sección', sectionLabel(this.store.section(item.sectionId))],
        ['Fecha', shortDate(item.date)],
      ],
    };
    this.dialog.open(AdminDocument, { data, width: '30rem' });
  }
}
