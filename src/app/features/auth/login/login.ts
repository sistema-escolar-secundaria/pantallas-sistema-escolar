import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { Role } from '../../../core/models/profile';
import { DemoSession } from '../../../core/services/demo-session';
import { DEMO_PASSWORD, PROFILES } from '../../../mock-data/profiles';

@Component({
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>Recuperar contraseña</h2>
    <mat-dialog-content>
      Esta recuperación es simulada. Puedes seleccionar tu perfil para volver a cargar las
      credenciales de demostración. No se enviará ningún correo.
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button matButton="filled" mat-dialog-close>Entendido</button>
    </mat-dialog-actions>
  `,
})
class RecoveryDialog {}

@Component({
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly session = inject(DemoSession);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly forms = inject(FormBuilder).nonNullable;

  protected readonly profiles = Object.values(PROFILES);
  protected readonly form = this.forms.group({
    role: this.forms.control<Role>('admin'),
    email: this.forms.control(PROFILES.admin.email, [Validators.required, Validators.email]),
    password: this.forms.control(DEMO_PASSWORD, Validators.required),
  });

  protected fillCredentials(role: Role): void {
    this.form.controls.email.reset(PROFILES[role].email);
    this.form.controls.password.reset(DEMO_PASSWORD);
  }

  protected signIn(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.session.start(this.form.controls.role.value);
    void this.router.navigate(this.session.dashboard());
  }

  protected recover(): void {
    this.dialog.open(RecoveryDialog, { width: '28rem' });
  }
}
