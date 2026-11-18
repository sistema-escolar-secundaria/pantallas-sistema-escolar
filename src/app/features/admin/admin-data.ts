export type Level = 'Primaria' | 'Secundaria';
export type StudentStatus = 'Activo' | 'Inactivo';
export type PaymentMethod = 'Efectivo' | 'Transferencia' | 'Tarjeta';

export interface Section {
  id: string;
  level: Level;
  grade: number;
  letter: string;
  capacity: number;
}

export interface Student {
  id: string;
  code: string;
  name: string;
  dni: string;
  sectionId: string;
  status: StudentStatus;
}

export interface Enrollment {
  id: string;
  studentId: string;
  year: number;
  sectionId: string;
  date: string;
}

export interface Pension {
  id: string;
  studentId: string;
  concept: string;
  amount: number;
  due: string;
}

export interface Payment {
  id: string;
  pensionId: string;
  date: string;
  method: PaymentMethod;
}

export interface Activity {
  label: string;
  detail: string;
}

export interface AdminData {
  students: Student[];
  enrollments: Enrollment[];
  pensions: Pension[];
  payments: Payment[];
  activity: Activity[];
}

export const YEARS = [2026, 2027];
export const METHODS: readonly PaymentMethod[] = ['Efectivo', 'Transferencia', 'Tarjeta'];

export function sectionLabel(section: Section): string {
  return section.level + ' · ' + section.grade + '.° ' + section.letter;
}

export function localDate(): string {
  const now = new Date();
  return [now.getFullYear(), now.getMonth() + 1, now.getDate()]
    .map((value) => String(value).padStart(2, '0'))
    .join('-');
}

const money = new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' });
const date = new Intl.DateTimeFormat('es-PE', { dateStyle: 'short', timeZone: 'UTC' });
export const soles = (amount: number) => money.format(amount);
export const shortDate = (value: string) => date.format(new Date(value + 'T00:00:00Z'));

export const normalize = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
