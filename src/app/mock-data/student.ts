import { Announcement, Grade, Term } from '../features/docente/teacher-data';

export const DEMO_STUDENT_ID = 's1';

export const STUDENT_ANNOUNCEMENTS: readonly Announcement[] = [
  {
    id: 'student-av-1',
    title: 'Cierre del cuarto bimestre',
    date: '2026-11-17',
    body: 'Consulta las próximas evaluaciones y lleva tus materiales de trabajo a clase.',
  },
  {
    id: 'student-av-2',
    title: 'Feria escolar de proyectos',
    date: '2026-11-12',
    body: 'La feria se realizará el viernes 27 de noviembre en el patio principal. Puedes visitar las exposiciones con tu sección.',
  },
];

export const STUDENT_ACTIVITIES = [
  {
    id: 'activity-1',
    assignmentId: 'mat-2a',
    title: 'Practica con tablas de frecuencia',
    date: '2026-11-19',
    description:
      'Elabora una tabla con los tiempos de lectura de cinco días y responde qué valor se repitió más. Lleva tu respuesta al aula para discutirla.',
  },
  {
    id: 'activity-2',
    assignmentId: 'mat-2a',
    title: 'Resuelve problemas de proporcionalidad',
    date: '2026-11-23',
    description:
      'Propón dos ejemplos de proporcionalidad directa y explica el procedimiento para resolver uno de ellos.',
  },
];

export const EXAMPLE_GRADES: Record<Term, Record<string, Grade>> = {
  '1': {
    'mat-2a/cantidad': {
      level: 'B',
      observation: 'Resuelve problemas directos y requiere apoyo al explicar su estrategia.',
    },
    'mat-2a/datos': {
      level: 'C',
      observation: 'Necesita apoyo para identificar los datos relevantes de una tabla.',
    },
  },
  '2': {
    'mat-2a/cantidad': {
      level: 'A',
      observation: 'Selecciona operaciones adecuadas y verifica los resultados.',
    },
    'mat-2a/datos': {
      level: 'B',
      observation: 'Lee tablas simples y está desarrollando la comparación de frecuencias.',
    },
  },
  '3': {
    'mat-2a/cantidad': {
      level: 'A',
      observation: 'Resuelve problemas de proporcionalidad y explica los pasos.',
    },
    'mat-2a/datos': { level: 'A', observation: 'Organiza información y presenta gráficos claros.' },
  },
  '4': {
    'mat-2a/cantidad': {
      level: 'AD',
      observation:
        'Justifica sus estrategias y compara soluciones en problemas de proporcionalidad.',
    },
    'mat-2a/datos': {
      level: 'A',
      observation: 'Interpreta gráficos y sustenta conclusiones con datos.',
    },
  },
};
