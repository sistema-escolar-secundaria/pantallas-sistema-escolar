import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { sectionLabel, shortDate, soles } from './admin-data';
import { AdminStore } from './admin-store';

@Component({
  imports: [RouterLink, MatButtonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  protected readonly store = inject(AdminStore);
  protected readonly sectionLabel = sectionLabel;
  protected readonly shortDate = shortDate;
  protected readonly soles = soles;
  protected readonly recent = computed(() =>
    [...this.store.data().enrollments].reverse().slice(0, 4),
  );
  protected readonly metrics = [
    { label: 'Total de estudiantes', value: '850' },
    { label: 'Total de docentes', value: '45' },
    { label: 'Total de secciones', value: '32' },
    { label: 'Matrículas activas', value: '820' },
    { label: 'Asistencia promedio', value: '92 %' },
    { label: 'Pagos pendientes', value: '75' },
  ];
  protected readonly attendance = [
    { label: 'Ago', value: 90 },
    { label: 'Sep', value: 91 },
    { label: 'Oct', value: 92 },
    { label: 'Nov', value: 95 },
  ];
  protected readonly revenue = [
    { label: 'Ago', value: 39400 },
    { label: 'Sep', value: 43200 },
    { label: 'Oct', value: 46800 },
    { label: 'Nov', value: 52000 },
  ];
}
