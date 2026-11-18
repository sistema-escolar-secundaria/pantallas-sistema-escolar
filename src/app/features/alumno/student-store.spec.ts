import { TestBed } from '@angular/core/testing';
import { TeacherStore } from '../docente/teacher-store';
import { reportHtml } from './report-html';
import { StudentStore } from './student-store';

describe('StudentStore', () => {
  const adminKey = 'sistema-escolar.admin.v1';
  const teacherKey = 'sistema-escolar.teacher.v1';

  beforeEach(() => {
    localStorage.removeItem(adminKey);
    localStorage.removeItem(teacherKey);
  });

  afterEach(() => {
    localStorage.removeItem(adminKey);
    localStorage.removeItem(teacherKey);
  });

  it('keeps the example separate from the enrolled student’s records', async () => {
    const teacher = TestBed.inject(TeacherStore);
    const store = TestBed.inject(StudentStore);
    await teacher.saveGrades(
      { assignmentId: 'mat-2a', term: '4', competencyId: 'cantidad' },
      { s1: { level: 'B', observation: 'Revisa la estrategia.' } },
    );
    await teacher.saveGrades(
      { assignmentId: 'mat-3a', term: '4', competencyId: 'cantidad' },
      { s2: { level: 'A', observation: 'Observación de otro estudiante.' } },
    );

    expect(store.courses().map((item) => item.id)).toEqual(['mat-2a']);
    expect(store.reportRows('4', 'example').map((item) => item.level)).toEqual(['AD', 'A']);
    expect(store.reportRows('4', 'recorded').map((item) => item.level)).toEqual(['B', '']);
    expect(store.reportRows('4', 'recorded')[0].observation).toBe('Revisa la estrategia.');
    expect(store.reportRows('3', 'recorded').every((item) => !item.level)).toBe(true);
  });

  it('renders editable names and conclusions as plain text in the report', () => {
    const output = reportHtml({
      name: 'Lucía & familia',
      placement: 'Secundaria · 2.° A',
      year: 2026,
      term: '4',
      mode: 'recorded',
      rows: [
        {
          course: 'Matemática',
          competency: 'Cantidad',
          level: '',
          observation: '<b>Comentario</b>',
        },
      ],
    });
    const doc = new DOMParser().parseFromString(output, 'text/html');
    expect(doc.body.textContent).toContain('Lucía & familia');
    expect(doc.querySelector('td:last-child')?.textContent).toBe('<b>Comentario</b>');
    expect(doc.querySelector('td:last-child b')).toBeNull();
    expect(doc.body.textContent).toContain('Pendiente');
  });
});
