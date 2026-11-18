import { Component, computed, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { localDate, sectionLabel, shortDate, soles, YEARS } from './admin-data';
import { AdminStore } from './admin-store';

type FinancialStatus = 'Pagada' | 'Vencida' | 'Pendiente';

@Component({
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './reports.html',
})
export class Reports {
  protected readonly store = inject(AdminStore);
  protected readonly years = YEARS;
  protected readonly type = signal('academic');
  protected readonly year = signal(YEARS[0]);
  protected readonly section = signal('');
  protected readonly status = signal('');
  protected readonly financialStatuses: readonly FinancialStatus[] = [
    'Pagada',
    'Vencida',
    'Pendiente',
  ];
  protected readonly sectionsLabel = sectionLabel;
  protected readonly date = shortDate;
  protected readonly money = soles;

  protected readonly academic = computed(() =>
    this.store
      .data()
      .enrollments.filter(
        (item) =>
          item.year === this.year() && (!this.section() || item.sectionId === this.section()),
      )
      .map((item) => ({
        ...item,
        student: this.store.student(item.studentId).name,
        section: sectionLabel(this.store.section(item.sectionId)),
      })),
  );
  protected readonly academicCount = computed(
    () => new Set(this.academic().map((item) => item.sectionId)).size,
  );
  protected readonly financial = computed(() => {
    const data = this.store.data();
    const today = localDate();
    const payments = new Map(data.payments.map((item) => [item.pensionId, item]));
    return data.pensions
      .filter((item) => item.due.startsWith(String(this.year()) + '-'))
      .map((item) => {
        const payment = payments.get(item.id);
        const status: FinancialStatus = payment
          ? 'Pagada'
          : item.due < today
            ? 'Vencida'
            : 'Pendiente';
        return { ...item, payment, status, student: this.store.student(item.studentId).name };
      })
      .filter((row) => !this.status() || row.status === this.status());
  });
  protected readonly totals = computed(() =>
    this.financial().reduce(
      (result, row) => {
        const amount = row.amount;
        result.total += amount;
        if (row.payment) result.paid += amount;
        else result.balance += amount;
        return result;
      },
      { total: 0, paid: 0, balance: 0 },
    ),
  );
}
