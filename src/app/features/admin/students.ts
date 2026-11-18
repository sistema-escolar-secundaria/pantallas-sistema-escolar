import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { sectionLabel, Student, StudentStatus } from './admin-data';
import { AdminDocument, AdminDocumentData } from './admin-document';
import { AdminStore } from './admin-store';

@Component({
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  template: `
    <h2 mat-dialog-title>{{ student ? 'Editar estudiante' : 'Registrar estudiante' }}</h2>
    <mat-dialog-content>
      <form id="student-form" class="admin-form" [formGroup]="form" (ngSubmit)="save()" novalidate>
        <mat-form-field appearance="outline">
          <mat-label>Código</mat-label><input matInput formControlName="code" />
          <mat-error>Introduce el código.</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Nombres y apellidos</mat-label><input matInput formControlName="name" />
          <mat-error>Introduce el nombre completo.</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>DNI</mat-label
          ><input matInput formControlName="dni" inputmode="numeric" maxlength="8" />
          <mat-error>Introduce un DNI de ocho dígitos.</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Grado y sección</mat-label>
          <select matNativeControl formControlName="sectionId">
            <option value="">Seleccionar sección</option>
            @for (section of store.sections; track section.id) {
              <option [value]="section.id">{{ label(section) }}</option>
            }
          </select>
          <mat-error>Selecciona una sección.</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Estado</mat-label>
          <select matNativeControl formControlName="status">
            <option>Activo</option>
            <option>Inactivo</option>
          </select>
        </mat-form-field>
        @if (error()) {
          <p role="alert" class="admin-error">{{ error() }}</p>
        }
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button matButton mat-dialog-close>Cancelar</button>
      <button matButton="filled" type="submit" form="student-form">Guardar estudiante</button>
    </mat-dialog-actions>
  `,
})
class StudentEditor {
  protected readonly student = inject<Student | null>(MAT_DIALOG_DATA);
  protected readonly store = inject(AdminStore);
  private readonly ref = inject(MatDialogRef<StudentEditor>);
  protected readonly error = signal('');
  protected readonly label = sectionLabel;
  private readonly builder = inject(FormBuilder).nonNullable;
  protected readonly form = this.builder.group({
    code: [this.student?.code ?? '', Validators.required],
    name: [this.student?.name ?? '', Validators.required],
    dni: [this.student?.dni ?? '', [Validators.required, Validators.pattern(/^\d{8}$/)]],
    sectionId: [this.student?.sectionId ?? '', Validators.required],
    status: this.builder.control<StudentStatus>(this.student?.status ?? 'Activo'),
  });

  protected save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    try {
      this.store.saveStudent(this.form.getRawValue(), this.student?.id);
      this.ref.close(true);
    } catch (error) {
      this.error.set((error as Error).message);
    }
  }
}

@Component({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './students.html',
})
export class Students {
  protected readonly store = inject(AdminStore);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);
  protected readonly query = signal('');
  protected readonly level = signal('');
  protected readonly grade = signal('');
  protected readonly section = signal('');
  protected readonly status = signal('');
  protected readonly columns = [
    'code',
    'name',
    'dni',
    'level',
    'grade',
    'section',
    'status',
    'actions',
  ];
  protected readonly rows = computed(() =>
    this.store
      .data()
      .students.map((student) => ({ student, placement: this.store.section(student.sectionId) }))
      .filter(
        ({ student, placement }) =>
          this.store.matches(student, this.query()) &&
          (!this.level() || placement.level === this.level()) &&
          (!this.grade() || placement.grade === Number(this.grade())) &&
          (!this.section() || placement.letter === this.section()) &&
          (!this.status() || student.status === this.status()),
      ),
  );

  protected edit(student: Student | null = null): void {
    this.dialog
      .open(StudentEditor, { data: student, width: '31rem' })
      .afterClosed()
      .subscribe((saved) => {
        if (saved)
          this.snack.open(
            student ? 'Estudiante actualizado.' : 'Estudiante registrado.',
            'Cerrar',
            { duration: 4000 },
          );
      });
  }

  protected view(student: Student): void {
    const data: AdminDocumentData = {
      title: 'Ficha del estudiante',
      fields: [
        ['Código', student.code],
        ['Nombre', student.name],
        ['DNI', student.dni],
        ['Grado y sección', sectionLabel(this.store.section(student.sectionId))],
        ['Estado', student.status],
      ],
    };
    this.dialog.open(AdminDocument, { data, width: '30rem' });
  }

  protected clearFilters(): void {
    this.query.set('');
    this.level.set('');
    this.grade.set('');
    this.section.set('');
    this.status.set('');
  }
}
