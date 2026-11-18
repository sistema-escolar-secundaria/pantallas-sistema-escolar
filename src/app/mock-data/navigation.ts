import { Role, SchoolModule } from '../core/models/profile';

export const NAVIGATION: Record<Role, readonly SchoolModule[]> = {
  admin: [
    {
      path: 'dashboard',
      title: 'Resumen general',
      description: 'Consulta los indicadores y la actividad reciente del colegio.',
    },
    {
      path: 'usuarios',
      title: 'Usuarios',
      description: 'Gestiona las cuentas y los perfiles del colegio.',
    },
    {
      path: 'estudiantes',
      title: 'Estudiantes',
      description: 'Registra y consulta los datos de los estudiantes.',
    },
    {
      path: 'docentes',
      title: 'Docentes',
      description: 'Gestiona el registro del personal docente.',
    },
    {
      path: 'matriculas',
      title: 'Matrículas',
      description: 'Consulta cupos y gestiona las matrículas escolares.',
    },
    {
      path: 'grados-secciones',
      title: 'Grados y secciones',
      description: 'Organiza los niveles, grados y secciones del colegio.',
    },
    {
      path: 'cursos',
      title: 'Cursos',
      description: 'Administra las asignaturas y sus asignaciones.',
    },
    {
      path: 'horarios',
      title: 'Horarios',
      description: 'Consulta y organiza los horarios académicos.',
    },
    {
      path: 'pagos',
      title: 'Pagos',
      description: 'Consulta pensiones, cargos y pagos registrados.',
    },
    {
      path: 'asistencia',
      title: 'Asistencia',
      description: 'Consulta los reportes de asistencia escolar.',
    },
    {
      path: 'evaluaciones',
      title: 'Evaluaciones',
      description: 'Consulta las evaluaciones programadas por los docentes.',
    },
    {
      path: 'reportes',
      title: 'Reportes',
      description: 'Consulta los reportes académicos y financieros.',
    },
    {
      path: 'configuracion',
      title: 'Configuración',
      description: 'Gestiona los datos y ajustes institucionales.',
    },
  ],
  docente: [
    {
      path: 'dashboard',
      title: 'Panel docente',
      description: 'Consulta tus cursos, clases y evaluaciones pendientes.',
    },
    { path: 'cursos', title: 'Cursos', description: 'Consulta tus cursos asignados.' },
    { path: 'horarios', title: 'Horarios', description: 'Consulta tu horario semanal de clases.' },
    {
      path: 'asistencia',
      title: 'Asistencia',
      description: 'Registra y revisa la asistencia por sección.',
    },
    {
      path: 'evaluaciones',
      title: 'Evaluaciones',
      description: 'Organiza y consulta las evaluaciones de tus cursos.',
    },
    {
      path: 'notas',
      title: 'Registro de notas',
      description: 'Registra niveles de logro y observaciones.',
    },
    {
      path: 'materiales',
      title: 'Materiales',
      description: 'Organiza los recursos de tus cursos.',
    },
    {
      path: 'estudiantes',
      title: 'Estudiantes',
      description: 'Consulta la lista de estudiantes por sección.',
    },
    {
      path: 'comunicados',
      title: 'Comunicados',
      description: 'Consulta los avisos institucionales.',
    },
  ],
  alumno: [
    {
      path: 'dashboard',
      title: 'Panel del alumno',
      description: 'Consulta tus clases, evaluaciones y comunicados.',
    },
    {
      path: 'cursos',
      title: 'Mis cursos',
      description: 'Consulta las asignaturas en las que estás matriculado.',
    },
    { path: 'horarios', title: 'Horarios', description: 'Consulta tu horario semanal de clases.' },
    { path: 'notas', title: 'Mis notas', description: 'Consulta tus niveles de logro por curso.' },
    { path: 'boleta', title: 'Boleta de notas', description: 'Consulta tu boleta académica.' },
    {
      path: 'aula-virtual',
      title: 'Aula virtual',
      description: 'Explora las actividades de tus cursos.',
    },
    {
      path: 'materiales',
      title: 'Materiales',
      description: 'Consulta los recursos compartidos por tus docentes.',
    },
    {
      path: 'documentos',
      title: 'Documentos',
      description: 'Consulta los documentos académicos disponibles.',
    },
    { path: 'cuenta', title: 'Mi cuenta', description: 'Consulta la información de tu perfil.' },
  ],
};
