import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute } from '@angular/router';
import { downloadFile } from '../../shared/ui/download';
import { SCHOOL_YEAR, TERMS, Term } from '../docente/teacher-data';
import { reportHtml } from './report-html';
import { GRADE_MODES, GradeMode, StudentStore } from './student-store';

@Component({
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './grades.html',
  styleUrl: '../../shared/ui/school-pages.scss',
  styles: `
    td.conclusion {
      white-space: pre-wrap;
      min-inline-size: 11rem;
      overflow-wrap: anywhere;
    }
  `,
})
export class StudentGrades {
  protected readonly isReport = inject(ActivatedRoute).snapshot.data['module'].path === 'boleta';
  protected readonly store = inject(StudentStore);
  protected readonly year = SCHOOL_YEAR;
  protected readonly terms = TERMS;
  protected readonly term = signal<Term>('4');
  protected readonly mode = signal<GradeMode>(this.isReport ? 'example' : 'recorded');
  protected readonly modeNames = GRADE_MODES;
  protected readonly rows = computed(() => this.store.reportRows(this.term(), this.mode()));

  protected setTerm(value: string): void {
    if (TERMS.includes(value as Term)) this.term.set(value as Term);
  }

  protected setMode(value: string): void {
    if (value === 'example' || value === 'recorded') this.mode.set(value);
  }

  protected download(): void {
    const student = this.store.student();
    if (!student || !this.rows().length) return;

    const suffix = this.mode() === 'example' ? 'ejemplo' : 'registrada';
    const content = reportHtml({
      name: student.name,
      placement: this.store.placement(),
      year: this.year,
      term: this.term(),
      mode: this.mode(),
      rows: this.rows(),
    });
    downloadFile(
      'boleta-' + student.code + '-' + this.year + '-b' + this.term() + '-' + suffix + '.html',
      content,
      'text/html;charset=utf-8',
    );
  }
}
