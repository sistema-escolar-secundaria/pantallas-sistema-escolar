import { GRADE_MODES, GradeMode } from './student-store';
import { Term } from '../docente/teacher-data';

interface ReportData {
  name: string;
  placement: string;
  year: number;
  term: Term;
  mode: GradeMode;
  rows: readonly {
    course: string;
    competency: string;
    level: string;
    observation: string;
  }[];
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function reportHtml({ name, placement, year, term, mode, rows }: ReportData): string {
  const body = rows
    .map(
      (row) =>
        '<tr>' +
        [row.course, row.competency, row.level || 'Pendiente', row.observation || 'Sin conclusión']
          .map((text) => '<td>' + escapeHtml(text) + '</td>')
          .join('') +
        '</tr>',
    )
    .join('');
  return `<!doctype html>
<html lang="es-PE">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Boleta de notas · ${year}</title>
  <style>
    body { font: 15px/1.55 system-ui, sans-serif; color: #132544; margin: 2rem auto; padding: 0 1rem; max-width: 60rem; }
    h1 { margin-bottom: .3rem; }
    table { width: 100%; border-collapse: collapse; }
    th, td { text-align: left; border: 1px solid #b7c4d9; padding: .65rem; vertical-align: top; }
    th { background: #e7f0ff; }
    td:last-child { white-space: pre-wrap; overflow-wrap: anywhere; }
    @media print { .screen { display: none; } tr { break-inside: avoid; } }
  </style>
</head>
<body>
  <main>
    <h1>Boleta de notas</h1>
    <p><strong>${GRADE_MODES[mode]}</strong> · Documento simulado</p>
    <p><strong>Estudiante</strong> ${escapeHtml(name)}<br>
       <strong>Año académico</strong> ${year} · ${term}.° bimestre<br>
       <strong>Grado y sección</strong> ${escapeHtml(placement)}</p>
    <p class="screen">Puedes imprimir esta boleta desde el menú del navegador.</p>
    <table>
      <thead><tr><th scope="col">Asignatura</th><th scope="col">Competencia</th><th scope="col">Nivel</th><th scope="col">Conclusión descriptiva</th></tr></thead>
      <tbody>${body}</tbody>
    </table>
  </main>
</body>
</html>`;
}
