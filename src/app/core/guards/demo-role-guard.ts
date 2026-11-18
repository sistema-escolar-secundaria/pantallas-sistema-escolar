import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Role } from '../models/profile';
import { DemoSession } from '../services/demo-session';

export function requireRole(role: Role): CanActivateFn {
  return () => {
    const session = inject(DemoSession);
    return session.profile()?.role === role || inject(Router).createUrlTree(session.dashboard());
  };
}

export const redirectToSession = () => {
  const session = inject(DemoSession);
  return inject(Router).createUrlTree(session.dashboard());
};
