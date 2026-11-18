import { Route, Routes } from '@angular/router';
import { redirectToSession, requireRole } from './core/guards/demo-role-guard';
import { Role, SchoolModule } from './core/models/profile';
import { NAVIGATION } from './mock-data/navigation';
import { PROFILES } from './mock-data/profiles';

const adminCatalog = () => import('./features/admin/catalog').then((m) => m.Catalog);
const adminMonitoring = () => import('./features/admin/monitoring').then((m) => m.Monitoring);

const ADMIN_PAGES = {
  usuarios: adminCatalog,
  docentes: adminCatalog,
  'grados-secciones': adminCatalog,
  cursos: adminCatalog,
  horarios: adminMonitoring,
  asistencia: adminMonitoring,
  evaluaciones: adminMonitoring,
  reportes: () => import('./features/admin/reports').then((m) => m.Reports),
  configuracion: () => import('./features/admin/settings').then((m) => m.Settings),
  dashboard: () => import('./features/admin/dashboard').then((m) => m.Dashboard),
  estudiantes: () => import('./features/admin/students').then((m) => m.Students),
  matriculas: () => import('./features/admin/enrollments').then((m) => m.Enrollments),
  pagos: () => import('./features/admin/payments').then((m) => m.Payments),
};

const teacherCatalog = () =>
  import('./features/docente/teacher-catalog').then((m) => m.TeacherCatalog);
const teacherRecords = () => import('./features/docente/records').then((m) => m.Records);

const TEACHER_PAGES = {
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

const studentCatalog = () =>
  import('./features/alumno/student-catalog').then((m) => m.StudentCatalog);
const studentGrades = () => import('./features/alumno/grades').then((m) => m.StudentGrades);

const STUDENT_PAGES = {
  dashboard: () => import('./features/alumno/dashboard').then((m) => m.StudentDashboard),
  cursos: studentCatalog,
  horarios: studentCatalog,
  notas: studentGrades,
  boleta: studentGrades,
  'aula-virtual': studentCatalog,
  materiales: studentCatalog,
  documentos: studentCatalog,
  cuenta: studentCatalog,
};

function profileRoute<Path extends string>(
  role: Role,
  modules: readonly (SchoolModule & { path: Path })[],
  pages: Record<NoInfer<Path>, NonNullable<Route['loadComponent']>>,
): Route {
  return {
    path: role,
    canActivate: [requireRole(role)],
    data: { role },
    loadComponent: () =>
      import('./layouts/school-layout/school-layout').then((m) => m.SchoolLayout),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      ...modules.map((module) => ({
        path: module.path,
        title: module.title + ' · ' + PROFILES[role].label,
        data: { module },
        loadComponent: pages[module.path],
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
  profileRoute('admin', NAVIGATION.admin, ADMIN_PAGES),
  profileRoute('docente', NAVIGATION.docente, TEACHER_PAGES),
  profileRoute('alumno', NAVIGATION.alumno, STUDENT_PAGES),
  { path: '', pathMatch: 'full', redirectTo: redirectToSession },
  { path: '**', redirectTo: redirectToSession },
];
