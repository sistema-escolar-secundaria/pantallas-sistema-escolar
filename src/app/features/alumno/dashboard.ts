import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { STUDENT_ANNOUNCEMENTS } from '../../mock-data/student';
import { shortDate } from '../admin/admin-data';
import { AdminDocument, AdminDocumentData } from '../admin/admin-document';
import { Announcement, DEMO_DAY } from '../docente/teacher-data';
import { StudentStore } from './student-store';

@Component({
  imports: [MatButtonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: '../../shared/ui/school-pages.scss',
})
export class StudentDashboard {
  protected readonly store = inject(StudentStore);
  private readonly dialog = inject(MatDialog);
  protected readonly date = shortDate(DEMO_DAY);
  protected readonly shortDate = shortDate;
  protected readonly today = computed(() =>
    this.store.lessons().filter((lesson) => lesson.day === 'Miércoles'),
  );
  protected readonly announcements = STUDENT_ANNOUNCEMENTS;

  protected open(item: Announcement): void {
    const data: AdminDocumentData = {
      title: item.title,
      fields: [
        ['Fecha', shortDate(item.date)],
        ['Mensaje', item.body],
      ],
    };
    this.dialog.open(AdminDocument, { data, width: '32rem' });
  }
}
