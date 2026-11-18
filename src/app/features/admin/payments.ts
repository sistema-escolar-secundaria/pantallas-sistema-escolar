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
import { MatTabsModule } from '@angular/material/tabs';
import {
  localDate,
  METHODS,
  Payment,
  PaymentMethod,
  Pension,
  shortDate,
  soles,
} from './admin-data';
import { AdminDocument, AdminDocumentData } from './admin-document';
import { AdminStore } from './admin-store';

@Component({
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  template: `
    <h2 mat-dialog-title>Registrar pago</h2>
    <mat-dialog-content>
      <p>{{ store.student(pension.studentId).name }} · {{ pension.concept }}</p>
      <p>
        <strong>{{ soles(pension.amount) }}</strong>
      </p>
      <form id="payment-form" class="admin-form" [formGroup]="form" (ngSubmit)="save()" novalidate>
        <mat-form-field appearance="outline"
          ><mat-label>Fecha de pago</mat-label>
          <input matInput type="date" formControlName="date" [max]="today" />
          <mat-error>Introduce la fecha de pago.</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline"
          ><mat-label>Medio de pago</mat-label>
          <select matNativeControl formControlName="method">
            @for (method of methods; track method) {
              <option [value]="method">{{ method }}</option>
            }
          </select>
        </mat-form-field>
        @if (error()) {
          <p role="alert" class="admin-error">{{ error() }}</p>
        }
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button matButton mat-dialog-close>Cancelar</button>
      <button matButton="filled" type="submit" form="payment-form">Confirmar pago</button>
    </mat-dialog-actions>
  `,
})
class PaymentEditor {
  protected readonly pension = inject<Pension>(MAT_DIALOG_DATA);
  protected readonly store = inject(AdminStore);
  private readonly ref = inject(MatDialogRef<PaymentEditor, Payment>);
  private readonly builder = inject(FormBuilder).nonNullable;
  protected readonly today = localDate();
  protected readonly soles = soles;
  protected readonly methods = METHODS;
  protected readonly error = signal('');
  protected readonly form = this.builder.group({
    date: [this.today, Validators.required],
    method: this.builder.control<PaymentMethod>('Efectivo'),
  });

  protected save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { date, method } = this.form.getRawValue();
    try {
      this.ref.close(this.store.pay(this.pension.id, date, method));
    } catch (error) {
      this.error.set((error as Error).message);
    }
  }
}

@Component({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule],
  templateUrl: './payments.html',
})
export class Payments {
  protected readonly store = inject(AdminStore);
  private readonly dialog = inject(MatDialog);
  private readonly snack = inject(MatSnackBar);
  protected readonly shortDate = shortDate;
  protected readonly soles = soles;
  protected readonly today = localDate();
  protected readonly accountId = signal('');
  protected readonly rows = computed(() => {
    const { pensions, payments } = this.store.data();
    return pensions.map((pension) => ({
      pension,
      payment: payments.find((payment) => payment.pensionId === pension.id),
      student: this.store.student(pension.studentId),
    }));
  });
  protected readonly pending = computed(() => this.rows().filter((row) => !row.payment));
  protected readonly history = computed(() =>
    this.rows()
      .filter((row) => row.payment)
      .sort(
        (a, b) =>
          b.payment!.date.localeCompare(a.payment!.date) ||
          b.payment!.id.localeCompare(a.payment!.id),
      ),
  );
  protected readonly account = computed(() =>
    this.rows().filter((row) => row.student.id === this.accountId()),
  );
  protected readonly accountBalance = computed(() =>
    this.account().reduce((total, row) => total + (row.payment ? 0 : row.pension.amount), 0),
  );
  protected readonly collected = computed(() =>
    this.history().reduce((total, row) => total + row.pension.amount, 0),
  );
  protected readonly late = computed(() =>
    this.pending().filter((row) => row.pension.due < this.today),
  );
  protected readonly lateBalance = computed(() =>
    this.late().reduce((total, row) => total + row.pension.amount, 0),
  );
  protected readonly delinquency = computed(() =>
    this.rows().length ? Math.round((100 * this.late().length) / this.rows().length) : 0,
  );

  protected register(pension: Pension): void {
    this.dialog
      .open<PaymentEditor, Pension, Payment>(PaymentEditor, { data: pension, width: '29rem' })
      .afterClosed()
      .subscribe((payment) => {
        if (payment) {
          this.snack.open('Pago registrado.', 'Cerrar', { duration: 4000 });
          this.receipt(payment);
        }
      });
  }

  protected receipt(payment: Payment): void {
    const row = this.rows().find((row) => row.pension.id === payment.pensionId)!;
    const data: AdminDocumentData = {
      title: 'Comprobante de pago',
      simulated: true,
      fields: [
        ['Código', payment.id],
        ['Estudiante', row.student.name],
        ['Concepto', row.pension.concept],
        ['Importe', soles(row.pension.amount)],
        ['Fecha', shortDate(payment.date)],
        ['Medio de pago', payment.method],
      ],
    };
    this.dialog.open(AdminDocument, { data, width: '30rem' });
  }
}
