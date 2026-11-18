import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { SchoolModule } from '../../../core/models/profile';
import { DemoSession } from '../../../core/services/demo-session';
import { SchoolIcon } from '../../ui/school-icon';

@Component({
  imports: [MatButtonModule, RouterLink, SchoolIcon],
  templateUrl: './module-preview.html',
  styleUrl: './module-preview.scss',
})
export class ModulePreview {
  private readonly route = inject(ActivatedRoute);
  protected readonly session = inject(DemoSession);
  protected readonly module = toSignal(
    this.route.data.pipe(map((data) => data['module'] as SchoolModule)),
    { requireSync: true },
  );
}
