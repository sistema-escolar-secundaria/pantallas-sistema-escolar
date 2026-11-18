import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

export interface AdminDocumentData {
  title: string;
  fields: readonly (readonly [string, string])[];
  simulated?: boolean;
}

@Component({
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>{{ data.title }}</h2>
    <mat-dialog-content>
      @if (data.simulated) {
        <p class="admin-chip">Documento simulado</p>
      }
      <dl class="admin-details">
        @for (field of data.fields; track field[0]) {
          <div>
            <dt>{{ field[0] }}</dt>
            <dd>{{ field[1] }}</dd>
          </div>
        }
      </dl>
    </mat-dialog-content>
    <mat-dialog-actions align="end"
      ><button matButton mat-dialog-close>Cerrar</button></mat-dialog-actions
    >
  `,
})
export class AdminDocument {
  protected readonly data = inject<AdminDocumentData>(MAT_DIALOG_DATA);
}
