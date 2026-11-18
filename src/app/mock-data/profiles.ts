import { DemoProfile, Role } from '../core/models/profile';

export const PROFILES: Record<Role, DemoProfile> = {
  admin: {
    role: 'admin',
    label: 'Administrador',
    name: 'Valeria Torres',
    email: 'admin@colegio.example',
  },
  docente: {
    role: 'docente',
    label: 'Docente',
    name: 'Diego Ramos',
    email: 'docente@colegio.example',
  },
  alumno: {
    role: 'alumno',
    label: 'Alumno',
    name: 'Lucía Flores',
    email: 'alumno@colegio.example',
  },
};

export const DEMO_PASSWORD = 'Escolar2026';
