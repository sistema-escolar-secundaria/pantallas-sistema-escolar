export const SCHOOL_YEAR = 2026;
export const DEMO_DAY = '2026-11-18';
export const WEEKDAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'] as const;
export const TERMS = ['1', '2', '3', '4'] as const;
export const LEVELS = ['AD', 'A', 'B', 'C'] as const;
export const ATTENDANCE = ['Presente', 'Ausente', 'Tardanza', 'Justificado'] as const;

export type Term = (typeof TERMS)[number];
export type Level = (typeof LEVELS)[number];
export type Attendance = (typeof ATTENDANCE)[number];
export type Weekday = (typeof WEEKDAYS)[number];

export interface Assignment {
  id: string;
  course: string;
  sectionId: string;
  competencies: readonly { id: string; label: string }[];
}

export interface Evaluation {
  id: string;
  title: string;
  assignmentId: string;
  term: Term;
  competencyId: string;
  date: string;
}

export interface Lesson {
  assignmentId: string;
  day: Weekday;
  start: string;
  end: string;
}

export interface Material {
  id: string;
  assignmentId: string;
  title: string;
  content: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  body: string;
}

export interface Grade {
  level: Level | '';
  observation: string;
}

export interface AttendanceContext {
  assignmentId: string;
  date: string;
}

export interface GradeContext {
  assignmentId: string;
  term: Term;
  competencyId: string;
}

export type AttendanceRows = Record<string, Attendance | ''>;
export type GradeRows = Record<string, Grade>;
export const attendanceKey = ({ assignmentId, date }: AttendanceContext) =>
  assignmentId + '/' + date;
export const gradeKey = ({ assignmentId, term, competencyId }: GradeContext) =>
  assignmentId + '/' + term + '/' + competencyId;

export function validSchoolDate(date: string): boolean {
  if (!new RegExp('^' + SCHOOL_YEAR + '-\\d{2}-\\d{2}$').test(date)) return false;
  const parsed = new Date(date + 'T00:00:00Z');
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date;
}
