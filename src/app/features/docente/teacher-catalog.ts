import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ANNOUNCEMENTS, EVALUATIONS, MATERIALS } from '../../mock-data/teacher';
import { downloadFile } from '../../shared/ui/download';
import { normalize, shortDate } from '../admin/admin-data';
import { Announcement, Material } from './teacher-data';
import { TeacherStore } from './teacher-store';

@Component({
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content
      ><p>{{ shortDate(data.date) }}</p>
      <p>{{ data.body }}</p></mat-dialog-content
    >
    <mat-dialog-actions align="end"
      ><button matButton mat-dialog-close>Cerrar</button></mat-dialog-actions
    >
  `,
})
class AnnouncementDialog {
  protected readonly data = inject<Announcement>(MAT_DIALOG_DATA);
  protected readonly shortDate = shortDate;
}

@Component({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './teacher-catalog.html',
  styleUrl: '../../shared/ui/school-pages.scss',
})
export class TeacherCatalog {
  protected readonly module = inject(ActivatedRoute).snapshot.data['module'];
  protected readonly store = inject(TeacherStore);
  private readonly dialog = inject(MatDialog);
  protected readonly assignment = signal('');
  protected readonly section = signal('');
  protected readonly status = signal('');
  protected readonly query = signal('');
  protected readonly announcements = ANNOUNCEMENTS;
  protected readonly shortDate = shortDate;
  protected readonly statuses = ['Próxima', 'Pendiente de calificar', 'Calificada'];
  protected readonly sections = [...new Set(this.store.assignments.map((item) => item.sectionId))];
  protected readonly evaluations = computed(() =>
    EVALUATIONS.filter((item) => !this.assignment() || item.assignmentId === this.assignment())
      .map((item) => ({ item, status: this.store.evaluationStatus(item) }))
      .filter((row) => !this.status() || row.status === this.status()),
  );
  protected readonly materials = computed(() =>
    MATERIALS.filter((item) => !this.assignment() || item.assignmentId === this.assignment()),
  );
  protected readonly students = computed(() => {
    const sections = new Map(this.store.assignments.map((item) => [item.sectionId, item.id]));
    const query = normalize(this.query());
    return [...sections]
      .filter(([section]) => !this.section() || section === this.section())
      .flatMap(([section, assignment]) =>
        this.store
          .roster(assignment)
          .filter((student) =>
            [student.name, student.code].some((value) => normalize(value).includes(query)),
          )
          .map((student) => ({ section, student })),
      )
      .sort((a, b) => a.student.name.localeCompare(b.student.name, 'es-PE'));
  });

  protected open(item: Announcement): void {
    this.dialog.open(AnnouncementDialog, { data: item, width: '30rem' });
  }

  protected download(item: Material): void {
    const text = [item.title, this.store.contextLabel(item.assignmentId), '', item.content].join(
      '\n',
    );
    downloadFile(item.id + '.txt', text, 'text/plain;charset=utf-8');
  }
}
