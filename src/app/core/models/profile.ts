export type Role = 'admin' | 'docente' | 'alumno';

export interface DemoProfile {
  role: Role;
  label: string;
  name: string;
  email: string;
}

export interface SchoolModule {
  path: string;
  title: string;
  description: string;
}
