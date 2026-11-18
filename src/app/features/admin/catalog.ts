import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { SchoolModule } from '../../core/models/profile';
import { ASSIGNMENTS } from '../../mock-data/teacher';
import { DEMO_TEACHER_ID } from '../../mock-data/admin-catalog';
import { AdminDocument } from './admin-document';
import { normalize, sectionLabel } from './admin-data';
import { AdminStore } from './admin-store';
import { ROLE_LABELS } from './catalog-data';
import {
  CATALOG_NAMES,
  CatalogEditor,
  CatalogEntry,
  CatalogKind,
  STATUSES,
} from './catalog-editor';

const HEADERS: Record<CatalogKind, readonly string[]> = {
  usuarios: ['Nombre', 'Correo electrónico', 'Rol', 'Estado'],
  docentes: ['Nombre', 'DNI', 'Especialidad', 'Estado'],
  cursos: ['Asignatura', 'Descripción'],
  'grados-secciones': ['Nivel', 'Grado', 'Letra', 'Capacidad'],
};

@Component({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './catalog.html',
})
export class Catalog {
  protected readonly module = inject(ActivatedRoute).snapshot.data['module'] as SchoolModule;
  protected readonly kind = this.module.path as CatalogKind;
  protected readonly meta = CATALOG_NAMES[this.kind];
  protected readonly headers = HEADERS[this.kind];
  protected readonly store = inject(AdminStore);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);
  protected readonly query = signal('');
  protected readonly status = signal('');
  protected readonly role = signal('');
  protected readonly level = signal('');
  protected readonly teacher = signal('');
  protected readonly section = signal('');
  protected readonly roles = Object.entries(ROLE_LABELS);
  protected readonly statuses = STATUSES;
  protected readonly sectionLabel = sectionLabel;
  protected readonly rows = computed(() => {
    const data = this.store.data();
    const query = normalize(this.query());
    const format = (entry: CatalogEntry, cells: string[]) => ({ entry, cells });
    const entries = {
      usuarios: () =>
        data.users
          .filter(
            (item) =>
              (!this.status() || item.status === this.status()) &&
              (!this.role() || item.role === this.role()),
          )
          .map((item) =>
            format(item, [item.name, item.email, ROLE_LABELS[item.role], item.status]),
          ),
      docentes: () =>
        data.teachers
          .filter((item) => !this.status() || item.status === this.status())
          .map((item) => format(item, [item.name, item.dni, item.specialty, item.status])),
      cursos: () => data.courses.map((item) => format(item, [item.name, item.description])),
      'grados-secciones': () =>
        data.sections
          .filter((item) => !this.level() || item.level === this.level())
          .map((item) =>
            format(item, [item.level, item.grade + '.°', item.letter, String(item.capacity)]),
          ),
    };
    return entries[this.kind]().filter((row) => normalize(row.cells.join(' ')).includes(query));
  });

  protected readonly allocated = computed(() => {
    const teacher = this.store.data().teachers.find((item) => item.id === DEMO_TEACHER_ID);
    return ASSIGNMENTS.filter(
      (item) =>
        (!this.teacher() || this.teacher() === DEMO_TEACHER_ID) &&
        (!this.section() || item.sectionId === this.section()),
    ).map((item) => ({
      ...item,
      teacher: teacher?.name ?? 'Diego Ramos',
      section: sectionLabel(this.store.section(item.sectionId)),
    }));
  });

  protected edit(entry?: CatalogEntry): void {
    this.dialog
      .open(CatalogEditor, { data: { kind: this.kind, entry }, width: '31rem' })
      .afterClosed()
      .subscribe((saved) => {
        if (saved)
          this.snack.open(entry ? 'Cambios guardados.' : 'Registro creado.', 'Cerrar', {
            duration: 4000,
          });
      });
  }

  protected detail(cells: string[]): void {
    this.dialog.open(AdminDocument, {
      data: {
        title: 'Ficha de ' + this.meta.singular,
        fields: this.headers.map((label, index) => [label, cells[index]]),
      },
      width: '30rem',
    });
  }
}
