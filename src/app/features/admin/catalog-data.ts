import { Role } from '../../core/models/profile';

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  role: Role;
  status: 'Activo' | 'Inactivo';
}

export interface TeacherEntry {
  id: string;
  name: string;
  dni: string;
  specialty: string;
  status: 'Activo' | 'Inactivo';
}

export interface CourseEntry {
  id: string;
  name: string;
  description: string;
}

export interface Institution {
  name: string;
  email: string;
  address: string;
}

export interface CatalogData {
  users: UserAccount[];
  teachers: TeacherEntry[];
  courses: CourseEntry[];
  institution: Institution;
}

export const ROLE_LABELS: Record<Role, string> = {
  admin: 'Administrador',
  docente: 'Docente',
  alumno: 'Alumno',
};

export const SECTION_LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
