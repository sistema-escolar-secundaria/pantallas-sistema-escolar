import { Injectable, signal } from '@angular/core';
import { ADMIN_SEED, SECTIONS } from '../../mock-data/admin';
import {
  AdminData,
  Enrollment,
  localDate,
  METHODS,
  normalize,
  Payment,
  PaymentMethod,
  sectionLabel,
  Student,
  YEARS,
} from './admin-data';

const KEY = 'sistema-escolar.admin.v1';

@Injectable({ providedIn: 'root' })
export class AdminStore {
  private readonly state = signal(this.readInitial());
  readonly data = this.state.asReadonly();
  readonly sections = SECTIONS;

  student(id: string): Student {
    return this.data().students.find((student) => student.id === id)!;
  }

  section(id: string) {
    return this.sections.find((section) => section.id === id)!;
  }

  matches(student: Student, query: string): boolean {
    return [student.code, student.name, student.dni].some((value) =>
      normalize(value).includes(normalize(query)),
    );
  }

  seats(sectionId: string, year: number, data = this.data()): number {
    const occupied = data.enrollments.filter(
      (item) => item.year === year && item.sectionId === sectionId,
    ).length;
    return Math.max(0, (this.section(sectionId)?.capacity ?? 0) - occupied);
  }

  saveStudent(input: Omit<Student, 'id'>, id?: string): void {
    const data = this.readForWrite();
    const code = input.code.trim().toUpperCase();
    const name = input.name.trim();
    const dni = input.dni.trim();

    if (!code || !name || !/^\d{8}$/.test(dni) || !this.section(input.sectionId)) {
      throw new Error('Completa los datos requeridos e introduce un DNI de ocho dígitos.');
    }
    if (data.students.some((student) => student.id !== id && student.code === code)) {
      throw new Error('Ya existe un estudiante con ese código.');
    }
    if (data.students.some((student) => student.id !== id && student.dni === dni)) {
      throw new Error('Ya existe un estudiante con ese DNI.');
    }

    const student = { ...input, id: id ?? crypto.randomUUID(), code, name, dni };
    const students = id
      ? data.students.map((item) => (item.id === id ? student : item))
      : [student, ...data.students];
    this.commit(data, { students }, id ? 'Estudiante actualizado' : 'Estudiante registrado', name);
  }

  enrollmentIssue(studentId: string, year: number, sectionId: string, data = this.data()): string {
    if (
      !data.students.some((student) => student.id === studentId) ||
      !YEARS.includes(year) ||
      !this.section(sectionId)
    ) {
      return 'Selecciona un estudiante, un año y una sección.';
    }
    if (data.enrollments.some((item) => item.studentId === studentId && item.year === year)) {
      return 'El estudiante ya tiene una matrícula para ese año.';
    }
    return this.seats(sectionId, year, data)
      ? ''
      : 'La sección seleccionada no tiene cupos disponibles.';
  }

  enroll(studentId: string, year: number, sectionId: string): Enrollment {
    const data = this.readForWrite();
    const issue = this.enrollmentIssue(studentId, year, sectionId, data);
    if (issue) throw new Error(issue);

    const id = 'MAT-' + String(data.enrollments.length + 1).padStart(4, '0');
    const item = { id, studentId, year, sectionId, date: localDate() };
    const detail =
      data.students.find((student) => student.id === studentId)!.name +
      ' · ' +
      sectionLabel(this.section(sectionId));
    this.commit(data, { enrollments: [...data.enrollments, item] }, 'Matrícula confirmada', detail);
    return item;
  }

  pay(pensionId: string, date: string, method: PaymentMethod): Payment {
    const data = this.readForWrite();
    const pension = data.pensions.find((item) => item.id === pensionId);
    if (!pension || data.payments.some((item) => item.pensionId === pensionId)) {
      throw new Error('Esta pensión ya no está disponible para pago.');
    }
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      Number.isNaN(Date.parse(date)) ||
      date > localDate() ||
      !METHODS.includes(method)
    ) {
      throw new Error('Selecciona una fecha válida y el medio de pago.');
    }

    const id = 'PAG-' + String(data.payments.length + 1).padStart(4, '0');
    const item = { id, pensionId, date, method };
    const detail =
      data.students.find((student) => student.id === pension.studentId)!.name +
      ' · ' +
      pension.concept;
    this.commit(data, { payments: [...data.payments, item] }, 'Pago registrado', detail);
    return item;
  }

  private readInitial(): AdminData {
    try {
      return this.readStored();
    } catch {
      return ADMIN_SEED;
    }
  }

  private readStored(): AdminData {
    const value = localStorage.getItem(KEY);
    return value ? (JSON.parse(value) as AdminData) : ADMIN_SEED;
  }

  private readForWrite(): AdminData {
    try {
      const data = this.readStored();
      this.state.set(data);
      return data;
    } catch {
      throw new Error('No se pudo leer el almacenamiento local. El cambio no se guardó.');
    }
  }

  private commit(
    data: AdminData,
    changes: Partial<AdminData>,
    label: string,
    detail: string,
  ): void {
    const updated = {
      ...data,
      ...changes,
      activity: [{ label, detail }, ...data.activity].slice(0, 12),
    };
    try {
      localStorage.setItem(KEY, JSON.stringify(updated));
    } catch {
      throw new Error('No se pudo guardar el cambio en el navegador.');
    }
    this.state.set(updated);
  }
}
