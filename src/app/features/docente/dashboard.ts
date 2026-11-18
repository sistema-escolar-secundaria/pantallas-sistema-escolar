import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ANNOUNCEMENTS, EVALUATIONS, LESSONS } from '../../mock-data/teacher';
import { shortDate } from '../admin/admin-data';
import { DEMO_DAY } from './teacher-data';
import { TeacherStore } from './teacher-store';

@Component({
  imports: [MatButtonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: '../../shared/ui/school-pages.scss',
})
export class TeacherDashboard {
  protected readonly store = inject(TeacherStore);
  protected readonly dateLabel = shortDate(DEMO_DAY);
  protected readonly today = LESSONS.filter((lesson) => lesson.day === 'Miércoles');
  protected readonly upcoming = computed(() =>
    EVALUATIONS.filter((item) => this.store.evaluationStatus(item) === 'Próxima'),
  );
  protected readonly pending = computed(() =>
    EVALUATIONS.filter((item) => this.store.evaluationStatus(item) === 'Pendiente de calificar'),
  );
  protected readonly announcements = ANNOUNCEMENTS;
  protected readonly shortDate = shortDate;
}
