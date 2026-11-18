import { TestBed } from '@angular/core/testing';
import { ADMIN_SEED } from '../../mock-data/admin';
import { AdminStore } from './admin-store';

describe('AdminStore catalog data', () => {
  const key = 'sistema-escolar.admin.v1';

  beforeEach(() => localStorage.removeItem(key));
  afterEach(() => localStorage.removeItem(key));

  it('preserves legacy records and supplies the new catalogs', () => {
    const legacy = {
      students: ADMIN_SEED.students,
      enrollments: ADMIN_SEED.enrollments,
      pensions: ADMIN_SEED.pensions,
      payments: ADMIN_SEED.payments,
      activity: ADMIN_SEED.activity,
    };
    localStorage.setItem(key, JSON.stringify(legacy));
    const store = TestBed.inject(AdminStore);
    expect(store.data().enrollments).toEqual(legacy.enrollments);
    expect(store.data().payments).toEqual(legacy.payments);
    expect(store.sections().find((section) => section.id === 'S2A')).toBeDefined();
    expect(store.data().users.length).toBe(3);

    store.saveInstitution({
      name: 'Colegio de prueba',
      email: 'contacto@colegio.example',
      address: 'Lima',
    });
    const saved = JSON.parse(localStorage.getItem(key)!);
    expect(saved.enrollments).toEqual(legacy.enrollments);
    expect(saved.payments).toEqual(legacy.payments);
    expect(saved.institution.name).toBe('Colegio de prueba');
  });

  it('shares new sections with enrollment and protects capacity per academic year', () => {
    const store = TestBed.inject(AdminStore);
    const input = { level: 'Primaria' as const, grade: 1, letter: 'C', capacity: 2 };
    store.saveSection(input);
    const section = store.sections().find((item) => item.letter === 'C')!;
    expect(() => store.saveSection({ ...input, letter: 'c' })).toThrow(/Ya existe una sección/);
    store.enroll('s3', 2027, section.id);
    store.enroll('s6', 2027, section.id);
    expect(() => store.enroll('s5', 2027, section.id)).toThrow(/no tiene cupos/);
    expect(() => store.saveSection({ ...input, capacity: 1 }, section.id)).toThrow(
      /capacidad es menor/,
    );
    expect(store.seats(section.id, 2026)).toBe(2);
    expect(store.seats(section.id, 2027)).toBe(0);
  });
});
