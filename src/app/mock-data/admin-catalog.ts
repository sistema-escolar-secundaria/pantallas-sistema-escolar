import { CatalogData } from '../features/admin/catalog-data';
import { PROFILES } from './profiles';

export const DEMO_TEACHER_ID = 'docente-diego';

export const ADMIN_CATALOG: CatalogData = {
  users: Object.values(PROFILES).map((profile) => ({
    id: profile.role,
    name: profile.name,
    email: profile.email,
    role: profile.role,
    status: 'Activo',
  })),
  teachers: [
    {
      id: DEMO_TEACHER_ID,
      name: PROFILES.docente.name,
      dni: '70020001',
      specialty: 'Matemática y Ciencia',
      status: 'Activo',
    },
    {
      id: 'docente-ana',
      name: 'Ana Paredes',
      dni: '70020002',
      specialty: 'Comunicación',
      status: 'Activo',
    },
  ],
  courses: [
    {
      id: 'mat',
      name: 'Matemática',
      description: 'Resolución de problemas y razonamiento matemático.',
    },
    {
      id: 'ct',
      name: 'Ciencia y Tecnología',
      description: 'Indagación y explicación de fenómenos.',
    },
  ],
  institution: {
    name: 'Gestión Escolar',
    email: 'contacto@colegio.example',
    address: 'Av. Los Educadores 120, Lima',
  },
};
