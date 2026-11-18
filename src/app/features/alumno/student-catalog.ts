import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SchoolModule } from '../../core/models/profile';
import { DemoSession } from '../../core/services/demo-session';
import { PROFILES } from '../../mock-data/profiles';
import { STUDENT_ACTIVITIES } from '../../mock-data/student';
import { downloadFile } from '../../shared/ui/download';
import { shortDate } from '../admin/admin-data';
import { AdminDocument, AdminDocumentData } from '../admin/admin-document';
import { Material, SCHOOL_YEAR, WEEKDAYS } from '../docente/teacher-data';
import { StudentStore } from './student-store';

@Component({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, RouterLink],
  templateUrl: './student-catalog.html',
  styleUrl: '../../shared/ui/school-pages.scss',
})
export class StudentCatalog {
  protected readonly module = inject(ActivatedRoute).snapshot.data['module'] as SchoolModule;
  protected readonly store = inject(StudentStore);
  private readonly session = inject(DemoSession);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  protected readonly profile = PROFILES.alumno;
  protected readonly year = SCHOOL_YEAR;
  protected readonly day = signal('');
  protected readonly course = signal('');
  protected readonly weekdays = WEEKDAYS;
  protected readonly shortDate = shortDate;
  protected readonly materials = computed(() =>
    this.store.materials().filter((item) => !this.course() || item.assignmentId === this.course()),
  );
  protected readonly days = computed(() =>
    WEEKDAYS.filter((day) => !this.day() || this.day() === day).map((day) => ({
      day,
      lessons: this.store.lessons().filter((lesson) => lesson.day === day),
    })),
  );

  protected showActivity(item: (typeof STUDENT_ACTIVITIES)[number]): void {
    this.open({
      title: item.title,
      fields: [
        ['Asignatura', this.store.courseName(item.assignmentId)],
        ['Fecha', shortDate(item.date)],
        ['Indicaciones', item.description],
      ],
    });
  }

  protected showEnrollment(): void {
    const student = this.store.student();
    const item = this.store.enrollment();
    if (!student || !item) return;

    this.open({
      title: 'Constancia de matrícula',
      simulated: true,
      fields: [
        ['Código', item.id],
        ['Estudiante', student.name],
        ['Año académico', String(item.year)],
        ['Grado y sección', this.store.placement()],
        ['Fecha', shortDate(item.date)],
      ],
    });
  }

  protected downloadMaterial(item: Material): void {
    const text = [
      item.title,
      this.store.courseName(item.assignmentId),
      this.store.placement(),
      '',
      item.content,
    ].join('\n');
    downloadFile(item.id + '.txt', text, 'text/plain;charset=utf-8');
  }

  protected signOut(): void {
    this.session.end();
    void this.router.navigate(['/login'], { replaceUrl: true });
  }

  private open(data: AdminDocumentData): void {
    this.dialog.open(AdminDocument, { data, width: '32rem' });
  }
}
