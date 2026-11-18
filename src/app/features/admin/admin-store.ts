import { computed, Injectable, signal } from '@angular/core';
import { ADMIN_SEED } from '../../mock-data/admin';
import {
  AdminData,
  Enrollment,
  localDate,
  METHODS,
  normalize,
  Payment,
  PaymentMethod,
  Section,
  sectionLabel,
  Student,
  YEARS,
} from './admin-data';

import {
  CourseEntry,
  EMAIL_PATTERN,
  Institution,
  ROLE_LABELS,
  SECTION_LETTERS,
  TeacherEntry,
  UserAccount,
} from './catalog-data';

const KEY = 'sistema-escolar.admin.v1';

@Injectable({ providedIn: 'root' })
export class AdminStore {
  private readonly state = signal(this.readInitial());
  readonly data = this.state.asReadonly();
  readonly sections = computed(() => this.data().sections);

  student(id: string): Student {
    return this.data().students.find((student) => student.id === id)!;
  }

  section(id: string) {
    return this.sections().find((section) => section.id === id)!;
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
    return Math.max(
      0,
      (data.sections.find((section) => section.id === sectionId)?.capacity ?? 0) - occupied,
    );
  }

  saveStudent(input: Omit<Student, 'id'>, id?: string): void {
    const data = this.readForWrite();
    const code = input.code.trim().toUpperCase();
    const name = input.name.trim();
    const dni = input.dni.trim();

    if (
      !code ||
      !name ||
      !/^\d{8}$/.test(dni) ||
      !data.sections.some((section) => section.id === input.sectionId)
    ) {
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
      !data.sections.some((section) => section.id === sectionId)
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

  saveUser(input: Omit<UserAccount, 'id'>, id?: string): void {
    const data = this.readForWrite();
    const name = input.name.trim();
    const email = input.email.trim().toLowerCase();
    if (
      !name ||
      !EMAIL_PATTERN.test(email) ||
      !Object.prototype.hasOwnProperty.call(ROLE_LABELS, input.role)
    ) {
      throw new Error('Introduce un nombre, un correo válido y un rol.');
    }
    if (data.users.some((item) => item.id !== id && item.email.toLowerCase() === email)) {
      throw new Error('Ya existe un usuario con ese correo.');
    }
    const users = this.upsert(data.users, { ...input, name, email }, id);
    this.commit(data, { users }, id ? 'Usuario actualizado' : 'Usuario registrado', name);
  }

  saveTeacher(input: Omit<TeacherEntry, 'id'>, id?: string): void {
    const data = this.readForWrite();
    const name = input.name.trim();
    const dni = input.dni.trim();
    const specialty = input.specialty.trim();
    if (!name || !/^\d{8}$/.test(dni) || !specialty) {
      throw new Error('Introduce el nombre, un DNI de ocho dígitos y la especialidad.');
    }
    if (data.teachers.some((item) => item.id !== id && item.dni === dni)) {
      throw new Error('Ya existe un docente con ese DNI.');
    }
    this.commit(
      data,
      { teachers: this.upsert(data.teachers, { ...input, name, dni, specialty }, id) },
      id ? 'Docente actualizado' : 'Docente registrado',
      name,
    );
  }

  saveCourse(input: Omit<CourseEntry, 'id'>, id?: string): void {
    const data = this.readForWrite();
    const name = input.name.trim();
    const description = input.description.trim();
    if (!name || !description)
      throw new Error('Introduce el nombre y la descripción de la asignatura.');
    if (data.courses.some((item) => item.id !== id && normalize(item.name) === normalize(name))) {
      throw new Error('Ya existe una asignatura con ese nombre.');
    }
    this.commit(
      data,
      { courses: this.upsert(data.courses, { name, description }, id) },
      id ? 'Asignatura actualizada' : 'Asignatura registrada',
      name,
    );
  }

  saveSection(input: Omit<Section, 'id'>, id?: string): void {
    const data = this.readForWrite();
    const existing = id ? data.sections.find((item) => item.id === id) : undefined;
    if (id && !existing) throw new Error('La sección seleccionada ya no está disponible.');

    const section = existing
      ? { ...existing, capacity: input.capacity }
      : { ...input, letter: input.letter.trim().toUpperCase() };
    if (
      (section.level !== 'Primaria' && section.level !== 'Secundaria') ||
      !Number.isInteger(section.grade) ||
      section.grade < 1 ||
      section.grade > (section.level === 'Primaria' ? 6 : 5) ||
      !SECTION_LETTERS.includes(section.letter) ||
      !Number.isInteger(section.capacity) ||
      section.capacity < 1
    )
      throw new Error(
        'Selecciona un grado válido para el nivel e introduce una letra y una capacidad entera mayor que cero.',
      );

    if (
      data.sections.some(
        (item) =>
          item.id !== id &&
          item.level === section.level &&
          item.grade === section.grade &&
          item.letter === section.letter,
      )
    ) {
      throw new Error('Ya existe una sección para ese nivel, grado y letra.');
    }
    const occupiedByYear = new Map<number, number>();
    for (const item of data.enrollments.filter((item) => item.sectionId === id)) {
      occupiedByYear.set(item.year, (occupiedByYear.get(item.year) ?? 0) + 1);
    }
    if ([...occupiedByYear.values()].some((count) => count > section.capacity)) {
      throw new Error('La capacidad es menor que las matrículas registradas en un año académico.');
    }

    const sections = this.upsert(data.sections, section, id);
    this.commit(
      data,
      { sections },
      id ? 'Capacidad actualizada' : 'Sección registrada',
      sectionLabel({ ...section, id: id ?? '' }),
    );
  }

  saveInstitution(input: Institution): void {
    const data = this.readForWrite();
    const institution = {
      name: input.name.trim(),
      email: input.email.trim().toLowerCase(),
      address: input.address.trim(),
    };
    if (!institution.name || !EMAIL_PATTERN.test(institution.email) || !institution.address) {
      throw new Error(
        'Introduce el nombre institucional, un correo de contacto válido y la dirección.',
      );
    }
    this.commit(data, { institution }, 'Datos institucionales actualizados', institution.name);
  }

  private upsert<T extends { id: string }>(
    items: readonly T[],
    input: Omit<T, 'id'>,
    id?: string,
  ): T[] {
    if (id && !items.some((item) => item.id === id))
      throw new Error('El registro ya no está disponible.');
    const item = { ...input, id: id ?? crypto.randomUUID() } as T;
    return id ? items.map((current) => (current.id === id ? item : current)) : [...items, item];
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
    return value ? { ...ADMIN_SEED, ...(JSON.parse(value) as Partial<AdminData>) } : ADMIN_SEED;
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
