import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { map } from 'rxjs';
import { Role } from '../../core/models/profile';
import { DemoSession } from '../../core/services/demo-session';
import { NAVIGATION } from '../../mock-data/navigation';
import { PROFILES } from '../../mock-data/profiles';
import { SchoolIcon } from '../../shared/ui/school-icon';

@Component({
  imports: [
    MatButtonModule,
    MatSidenavModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    SchoolIcon,
  ],
  templateUrl: './school-layout.html',
  styleUrl: './school-layout.scss',
})
export class SchoolLayout {
  private readonly session = inject(DemoSession);
  private readonly router = inject(Router);
  protected readonly role = inject(ActivatedRoute).snapshot.data['role'] as Role;
  protected readonly profile = PROFILES[this.role];
  protected readonly modules = NAVIGATION[this.role];
  protected readonly dashboard = ['/', this.role, 'dashboard'];

  protected readonly compact = toSignal(
    inject(BreakpointObserver)
      .observe('(max-width: 960px)')
      .pipe(map((state) => state.matches)),
    { initialValue: false },
  );
  protected readonly menuOpen = signal(false);

  protected signOut(): void {
    this.session.end();
    void this.router.navigate(['/login'], { replaceUrl: true });
  }
}
