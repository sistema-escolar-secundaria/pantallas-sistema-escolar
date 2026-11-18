import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminStore } from './admin-store';

@Component({
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './settings.html',
  styles: `
    form {
      max-inline-size: 34rem;
    }
  `,
})
export class Settings {
  private readonly store = inject(AdminStore);
  private readonly builder = inject(FormBuilder).nonNullable;
  private readonly initial = this.store.data().institution;
  protected readonly feedback = signal('');
  protected readonly error = signal('');
  protected readonly form = this.builder.group({
    name: [this.initial.name, Validators.required],
    email: [this.initial.email, [Validators.required, Validators.email]],
    address: [this.initial.address, Validators.required],
  });

  protected save(): void {
    this.feedback.set('');
    this.error.set('');
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    try {
      this.store.saveInstitution(this.form.getRawValue());
      this.form.reset(this.store.data().institution);
      this.feedback.set('Configuración guardada.');
    } catch (error) {
      this.error.set((error as Error).message);
    }
  }
}
