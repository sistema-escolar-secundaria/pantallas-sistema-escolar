import { computed, Injectable, signal } from '@angular/core';
import { Role } from '../models/profile';
import { PROFILES } from '../../mock-data/profiles';

const STORAGE_KEY = 'sistema-escolar.demo-role';

@Injectable({ providedIn: 'root' })
export class DemoSession {
  private readonly role = signal<Role | null>(this.readRole());
  readonly profile = computed(() => {
    const role = this.role();
    return role ? PROFILES[role] : null;
  });
  readonly dashboard = computed(() => {
    const role = this.role();
    return role ? ['/', role, 'dashboard'] : ['/login'];
  });

  start(role: Role): void {
    this.role.set(role);
    this.persist(role);
  }

  end(): void {
    this.role.set(null);
    this.persist(null);
  }

  private readRole(): Role | null {
    try {
      const stored = sessionStorage.getItem(STORAGE_KEY);
      return stored === 'admin' || stored === 'docente' || stored === 'alumno' ? stored : null;
    } catch {
      return null;
    }
  }

  private persist(role: Role | null): void {
    try {
      if (role) {
        sessionStorage.setItem(STORAGE_KEY, role);
      } else {
        sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // The in-memory session still works when browser storage is unavailable.
    }
  }
}
