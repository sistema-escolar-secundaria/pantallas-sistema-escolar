import { TestBed } from '@angular/core/testing';
import { AdminStore } from '../admin/admin-store';
import { EVALUATIONS } from '../../mock-data/teacher';
import { DEMO_DAY } from './teacher-data';
import { TeacherStore } from './teacher-store';

describe('TeacherStore', () => {
  const teacherKey = 'sistema-escolar.teacher.v1';
  const adminKey = 'sistema-escolar.admin.v1';
  let store: TeacherStore;

  beforeEach(() => {
    localStorage.removeItem(teacherKey);
    localStorage.removeItem(adminKey);
    store = TestBed.inject(TeacherStore);
  });

  afterEach(() => {
    localStorage.removeItem(teacherKey);
    localStorage.removeItem(adminKey);
  });

  it('uses the enrollment section and academic year for the roster', () => {
    const admin = TestBed.inject(AdminStore);
    admin.enroll('s3', 2026, 'P1B');
    admin.enroll('s5', 2027, 'P1B');
    admin.enroll('s6', 2026, 'S1A');
    expect(store.roster('mat-1b').map((student) => student.id)).toEqual(['s3']);
    expect(store.studentCount()).toBe(4);
  });

  it('preserves unrelated attendance rows and dates when a mark is cleared', async () => {
    TestBed.inject(AdminStore).enroll('s3', 2026, 'P3A');
    const context = { assignmentId: 'mat-3a', date: DEMO_DAY };
    const otherDate = { ...context, date: '2026-11-19' };
    await store.saveAttendance(context, { s2: 'Presente', s3: 'Tardanza' });
    await store.saveAttendance(otherDate, { s2: 'Ausente' });
    await store.saveAttendance(context, { s2: '' });
    expect(store.attendance(context)).toEqual({ s3: 'Tardanza' });
    expect(store.attendance(otherDate)).toEqual({ s2: 'Ausente' });
  });

  it('counts observations without a level as pending and scopes levels to each competency', async () => {
    const evaluation = EVALUATIONS[0];
    await store.saveGrades(evaluation, {
      s1: { level: '', observation: 'Revisar el procedimiento.' },
    });
    expect(store.evaluationStatus(evaluation)).toBe('Pendiente de calificar');
    await store.saveGrades(evaluation, {
      s1: { level: 'AD', observation: 'Explica el procedimiento.' },
    });
    expect(store.evaluationStatus(evaluation)).toBe('Calificada');
    expect(store.grades({ ...evaluation, competencyId: 'datos' })).toEqual({});
    expect(store.grades({ ...evaluation, term: '3' })).toEqual({});
  });
});
