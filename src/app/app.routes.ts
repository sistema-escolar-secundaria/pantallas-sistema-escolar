import { Route, Routes } from '@angular/router';
import { redirectToSession, requireRole } from './core/guards/demo-role-guard';
import { Role } from './core/models/profile';
import { NAVIGATION } from './mock-data/navigation';
import { PROFILES } from './mock-data/profiles';

const ADMIN_PAGES: Record<string, Route['loadComponent']> = {
  dashboard: () => import('./features/admin/dashboard').then((m) => m.Dashboard),
  estudiantes: () => import('./features/admin/students').then((m) => m.Students),
  matriculas: () => import('./features/admin/enrollments').then((m) => m.Enrollments),
  pagos: () => import('./features/admin/payments').then((m) => m.Payments),
};

const teacherCatalog = () =>
  import('./features/docente/teacher-catalog').then((m) => m.TeacherCatalog);
const teacherRecords = () => import('./features/docente/records').then((m) => m.Records);

const TEACHER_PAGES: Record<string, Route['loadComponent']> = {
  dashboard: () => import('./features/docente/dashboard').then((m) => m.TeacherDashboard),
  cursos: teacherCatalog,
  horarios: () => import('./features/docente/schedule').then((m) => m.Schedule),
  asistencia: teacherRecords,
  evaluaciones: teacherCatalog,
  notas: teacherRecords,
  materiales: teacherCatalog,
  estudiantes: teacherCatalog,
  comunicados: teacherCatalog,
};

const PROFILE_PAGES = { admin: ADMIN_PAGES, docente: TEACHER_PAGES, alumno: undefined };

function profileRoute(role: Role): Route {
  return {
    path: role,
    canActivate: [requireRole(role)],
    data: { role },
    loadComponent: () =>
      import('./layouts/school-layout/school-layout').then((m) => m.SchoolLayout),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      ...NAVIGATION[role].map((module) => ({
        path: module.path,
        title: module.title + ' · ' + PROFILES[role].label,
        data: { module },
        loadComponent:
          PROFILE_PAGES[role]?.[module.path] ??
          (() =>
            import('./shared/components/module-preview/module-preview').then(
              (m) => m.ModulePreview,
            )),
      })),
    ],
  };
}

export const routes: Routes = [
  {
    path: 'login',
    title: 'Iniciar sesión · Sistema de Gestión Escolar',
    loadComponent: () => import('./features/auth/login/login').then((m) => m.Login),
  },
  profileRoute('admin'),
  profileRoute('docente'),
  profileRoute('alumno'),
  { path: '', pathMatch: 'full', redirectTo: redirectToSession },
  { path: '**', redirectTo: redirectToSession },
];
