import { AdminData, Section } from '../features/admin/admin-data';
import { ADMIN_CATALOG } from './admin-catalog';

export const SECTIONS: readonly Section[] = [
  { id: 'P1A', level: 'Primaria', grade: 1, letter: 'A', capacity: 24 },
  { id: 'P1B', level: 'Primaria', grade: 1, letter: 'B', capacity: 24 },
  { id: 'P3A', level: 'Primaria', grade: 3, letter: 'A', capacity: 26 },
  { id: 'P6A', level: 'Primaria', grade: 6, letter: 'A', capacity: 28 },
  { id: 'S1A', level: 'Secundaria', grade: 1, letter: 'A', capacity: 28 },
  { id: 'S2A', level: 'Secundaria', grade: 2, letter: 'A', capacity: 1 },
  { id: 'S2B', level: 'Secundaria', grade: 2, letter: 'B', capacity: 30 },
  { id: 'S5A', level: 'Secundaria', grade: 5, letter: 'A', capacity: 28 },
];

export const ADMIN_SEED: AdminData = {
  ...ADMIN_CATALOG,
  sections: SECTIONS,
  students: [
    {
      id: 's1',
      code: 'EST-001',
      name: 'Lucía Flores Salazar',
      dni: '70010001',
      sectionId: 'S2A',
      status: 'Activo',
    },
    {
      id: 's2',
      code: 'EST-002',
      name: 'Mateo Rojas León',
      dni: '70010002',
      sectionId: 'P3A',
      status: 'Activo',
    },
    {
      id: 's3',
      code: 'EST-003',
      name: 'Camila Quispe Díaz',
      dni: '70010003',
      sectionId: 'P1A',
      status: 'Activo',
    },
    {
      id: 's4',
      code: 'EST-004',
      name: 'Santiago Vega Cruz',
      dni: '70010004',
      sectionId: 'S5A',
      status: 'Activo',
    },
    {
      id: 's5',
      code: 'EST-005',
      name: 'Valentina Huamán Paredes',
      dni: '70010005',
      sectionId: 'P6A',
      status: 'Inactivo',
    },
    {
      id: 's6',
      code: 'EST-006',
      name: 'Nicolás Soto Ruiz',
      dni: '70010006',
      sectionId: 'S1A',
      status: 'Activo',
    },
  ],
  enrollments: [
    { id: 'MAT-0001', studentId: 's1', year: 2026, sectionId: 'S2A', date: '2026-02-11' },
    { id: 'MAT-0002', studentId: 's2', year: 2026, sectionId: 'P3A', date: '2026-02-13' },
    { id: 'MAT-0003', studentId: 's4', year: 2026, sectionId: 'S5A', date: '2026-02-15' },
  ],
  pensions: [
    { id: 'p1', studentId: 's1', concept: 'Pensión de octubre', amount: 420, due: '2026-10-31' },
    { id: 'p2', studentId: 's1', concept: 'Pensión de noviembre', amount: 420, due: '2026-11-30' },
    { id: 'p3', studentId: 's2', concept: 'Pensión de noviembre', amount: 380, due: '2026-11-30' },
    { id: 'p4', studentId: 's4', concept: 'Pensión de octubre', amount: 420, due: '2026-10-31' },
    { id: 'p5', studentId: 's2', concept: 'Pensión de octubre', amount: 380, due: '2026-10-31' },
  ],
  payments: [{ id: 'PAG-0001', pensionId: 'p5', date: '2026-10-24', method: 'Transferencia' }],
  activity: [
    { label: 'Matrícula confirmada', detail: 'Santiago Vega Cruz · Secundaria · 5.° A' },
    { label: 'Pago registrado', detail: 'Mateo Rojas León · Pensión de octubre' },
  ],
};
