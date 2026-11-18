import { Component, computed, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LESSONS } from '../../mock-data/teacher';
import { WEEKDAYS } from './teacher-data';
import { TeacherStore } from './teacher-store';

@Component({
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './schedule.html',
  styleUrl: './teacher.scss',
})
export class Schedule {
  protected readonly store = inject(TeacherStore);
  protected readonly selected = signal('');
  protected readonly weekdays = WEEKDAYS;
  protected readonly days = computed(() =>
    WEEKDAYS.filter((day) => !this.selected() || day === this.selected()).map((day) => ({
      day,
      lessons: LESSONS.filter((lesson) => lesson.day === day),
    })),
  );
}
