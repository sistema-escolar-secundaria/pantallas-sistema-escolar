import { Component, computed, inject } from '@angular/core';
import { FormControl, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Role } from '../../core/models/profile';
import { Level, Section, StudentStatus } from './admin-data';
import { AdminStore } from './admin-store';
import {
  CourseEntry,
  ROLE_LABELS,
  SECTION_LETTERS,
  TeacherEntry,
  UserAccount,
} from './catalog-data';

export type CatalogKind = 'usuarios' | 'docentes' | 'cursos' | 'grados-secciones';
export type CatalogEntry = UserAccount | TeacherEntry | CourseEntry | Section;

export const STATUSES: readonly StudentStatus[] = ['Activo', 'Inactivo'];
export const CATALOG_NAMES: Record<CatalogKind, { singular: string; search: string }> = {
  usuarios: { singular: 'usuario', search: 'Nombre o correo' },
  docentes: { singular: 'docente', search: 'Nombre, DNI o especialidad' },
  cursos: { singular: 'asignatura', search: 'Nombre o descripción' },
  'grados-secciones': { singular: 'sección', search: 'Nivel, grado o letra' },
};

interface Field {
  key: string;
  label: string;
  options?: readonly { label: string; value: string }[];
  type?: 'email' | 'number' | 'text';
  length?: number;
}

const options = (items: readonly string[]) => items.map((value) => ({ label: value, value }));
const name: Field = { key: 'name', label: 'Nombre', length: 100 };
const status: Field = { key: 'status', label: 'Estado', options: options(STATUSES) };
const fields: Record<CatalogKind, Field[]> = {
  usuarios: [
    name,
    { key: 'email', label: 'Correo electrónico', type: 'email', length: 120 },
    {
      key: 'role',
      label: 'Rol',
      options: Object.entries(ROLE_LABELS).map(([value, label]) => ({ value, label })),
    },
    status,
  ],
  docentes: [
    name,
    { key: 'dni', label: 'DNI', length: 8 },
    { key: 'specialty', label: 'Especialidad', length: 100 },
    status,
  ],
  cursos: [name, { key: 'description', label: 'Descripción', length: 200 }],
  'grados-secciones': [
    { key: 'level', label: 'Nivel', options: options(['Primaria', 'Secundaria']) },
    { key: 'grade', label: 'Grado', options: options(['1', '2', '3', '4', '5', '6']) },
    { key: 'letter', label: 'Letra', options: options(SECTION_LETTERS) },
    { key: 'capacity', label: 'Capacidad', type: 'number' },
  ],
};

@Component({
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './catalog-editor.html',
})
export class CatalogEditor {
  private readonly data = inject<{ kind: CatalogKind; entry?: CatalogEntry }>(MAT_DIALOG_DATA);
  private readonly store = inject(AdminStore);
  private readonly ref = inject(MatDialogRef<CatalogEditor, boolean>);
  protected readonly title =
    (this.data.entry ? 'Editar ' : 'Registrar ') + CATALOG_NAMES[this.data.kind].singular;
  protected readonly fields = fields[this.data.kind].filter(
    (field) =>
      !this.data.entry || this.data.kind !== 'grados-secciones' || field.key === 'capacity',
  );
  protected readonly form = new FormRecord<FormControl<string | number | null>>(
    Object.fromEntries(
      this.fields.map((field) => [
        field.key,
        new FormControl<string | number | null>(this.initialValue(field), [
          Validators.required,
          ...(field.type === 'email' ? [Validators.email] : []),
        ]),
      ]),
    ),
  );
  protected readonly section = computed(() =>
    this.data.kind === 'grados-secciones' ? (this.data.entry as Section | undefined) : undefined,
  );
  protected error = '';

  protected save(): void {
    this.error = '';
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    const text = (key: string) => String(value[key] ?? '');
    const id = this.data.entry?.id;
    try {
      switch (this.data.kind) {
        case 'usuarios':
          this.store.saveUser(
            {
              name: text('name'),
              email: text('email'),
              role: text('role') as Role,
              status: text('status') as StudentStatus,
            },
            id,
          );
          break;
        case 'docentes':
          this.store.saveTeacher(
            {
              name: text('name'),
              dni: text('dni'),
              specialty: text('specialty'),
              status: text('status') as StudentStatus,
            },
            id,
          );
          break;
        case 'cursos':
          this.store.saveCourse({ name: text('name'), description: text('description') }, id);
          break;
        case 'grados-secciones':
          this.store.saveSection(
            {
              level: (this.section()?.level ?? text('level')) as Level,
              grade: this.section()?.grade ?? Number(value['grade']),
              letter: this.section()?.letter ?? text('letter'),
              capacity: Number(value['capacity']),
            },
            id,
          );
          break;
      }
      this.ref.close(true);
    } catch (error) {
      this.error = (error as Error).message;
    }
  }

  private initialValue(field: Field): string | number {
    const entry = this.data.entry;
    const current = entry ? entry[field.key as keyof typeof entry] : undefined;
    return current ?? field.options?.[0]?.value ?? '';
  }
}
