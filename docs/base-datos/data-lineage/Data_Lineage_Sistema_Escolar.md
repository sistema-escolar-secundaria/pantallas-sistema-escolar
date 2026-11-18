# Data Lineage — Sistema de Gestión Escolar (33 tablas)

> Base documental: exportaciones de `information_schema.COLUMNS`, claves foráneas y mapa de renombrado inglés → español. Los nombres españoles corresponden al script de migración; verificar si ya fue ejecutado.

**Alcance:** linaje estructural verificado por metadatos; linaje funcional propuesto para procesos escolares. No se ha auditado código backend, vistas, ETL, triggers ni reportes ejecutables.

**Cobertura:** 33 tablas; 163 columnas; 46 referencias FK exportadas.

## 1. Inventario de entidades y procedencia estructural

### Institucional

| Tabla en español | Tabla original | Función | Datos de referencia (FK) |
|---|---|---|---|
| `colegios` | `schools` | Institución educativa principal | Sin FK salientes |
| `sedes` | `campuses` | Sedes físicas del colegio | colegios |
| `anios_academicos` | `academic_years` | Vigencia del año lectivo | colegios |
| `periodos_academicos` | `academic_periods` | Periodos de evaluación del año | anios_academicos |

### Seguridad

| Tabla en español | Tabla original | Función | Datos de referencia (FK) |
|---|---|---|---|
| `usuarios` | `users` | Identidades para acceder al sistema | Sin FK salientes |
| `roles` | `roles` | Catálogo de perfiles de acceso | Sin FK salientes |
| `usuarios_roles` | `user_roles` | Asignación de roles a cuentas | roles, usuarios |

### Personas

| Tabla en español | Tabla original | Función | Datos de referencia (FK) |
|---|---|---|---|
| `estudiantes` | `students` | Datos personales y código del alumno | usuarios |
| `docentes` | `teachers` | Datos del docente | usuarios |
| `apoderados` | `guardians` | Datos del apoderado | usuarios |
| `estudiantes_apoderados` | `student_guardians` | Vínculo entre alumno y apoderado | apoderados, estudiantes |

### Académico

| Tabla en español | Tabla original | Función | Datos de referencia (FK) |
|---|---|---|---|
| `niveles_educativos` | `education_levels` | Primaria o secundaria | Sin FK salientes |
| `grados` | `grades` | Grados dentro de cada nivel | niveles_educativos |
| `secciones` | `sections` | Grupo escolar por año, grado y sede | anios_academicos, docentes, grados, sedes |
| `asignaturas` | `subjects` | Catálogo de asignaturas | Sin FK salientes |
| `asignaturas_grados` | `grade_subjects` | Asignaturas previstas para cada grado | asignaturas, grados |
| `matriculas` | `enrollments` | Historial de matrícula del estudiante | anios_academicos, estudiantes, secciones |
| `asignaciones_cursos` | `course_assignments` | Docente asignado a curso y sección | asignaturas, docentes, secciones |
| `aulas` | `classrooms` | Aulas disponibles por sede | sedes |
| `horarios_clases` | `class_schedules` | Día y horario de cada curso asignado | asignaciones_cursos, aulas |

### Evaluación

| Tabla en español | Tabla original | Función | Datos de referencia (FK) |
|---|---|---|---|
| `competencias` | `competencies` | Competencias vinculadas a asignaturas | asignaturas |
| `evaluaciones` | `assessments` | Evaluaciones definidas por curso y periodo | asignaciones_cursos, competencias, periodos_academicos |
| `registros_calificaciones` | `grade_records` | Resultado de evaluación de una matrícula | evaluaciones, matriculas |
| `resultados_competencias_periodo` | `period_competency_results` | Resultado consolidado por competencia y periodo | competencias, matriculas, periodos_academicos |

### Asistencia

| Tabla en español | Tabla original | Función | Datos de referencia (FK) |
|---|---|---|---|
| `asistencia_estudiantes` | `student_attendance` | Asistencia diaria de una matrícula | matriculas, usuarios |

### Finanzas

| Tabla en español | Tabla original | Función | Datos de referencia (FK) |
|---|---|---|---|
| `conceptos_pago` | `payment_concepts` | Tipos de obligaciones económicas | Sin FK salientes |
| `cargos` | `charges` | Obligación económica de una matrícula | conceptos_pago, matriculas |
| `pagos` | `payments` | Pago recibido | Sin FK salientes |
| `aplicaciones_pagos` | `payment_allocations` | Distribución de pagos entre cargos | cargos, pagos |
| `comprobantes_pago` | `payment_receipts` | Comprobante asociado a pago | pagos |

### Comunicaciones y documentos

| Tabla en español | Tabla original | Función | Datos de referencia (FK) |
|---|---|---|---|
| `comunicados` | `announcements` | Comunicados emitidos por usuarios | usuarios |
| `destinatarios_comunicados` | `announcement_recipients` | Destinatarios y lectura de comunicados | comunicados, usuarios |
| `documentos` | `documents` | Metadatos de documentos asociados a usuarios | usuarios |

## 2. Relaciones técnicas extraídas del servidor

La siguiente matriz muestra la procedencia estructural de los identificadores. **No implica movimiento ni copia de datos**: una FK vincula registros existentes.

| Tabla origen (español) | Columna FK | Tabla referenciada | Columna PK/UK | ON UPDATE | ON DELETE |
|---|---|---|---|---|---|
| `periodos_academicos` | `anio_academico_id` | `anios_academicos` | `id` | NO ACTION | NO ACTION |
| `anios_academicos` | `colegio_id` | `colegios` | `id` | NO ACTION | NO ACTION |
| `destinatarios_comunicados` | `comunicado_id` | `comunicados` | `id` | NO ACTION | NO ACTION |
| `destinatarios_comunicados` | `usuario_id` | `usuarios` | `id` | NO ACTION | NO ACTION |
| `comunicados` | `usuario_autor_id` | `usuarios` | `id` | NO ACTION | NO ACTION |
| `evaluaciones` | `periodo_academico_id` | `periodos_academicos` | `id` | NO ACTION | NO ACTION |
| `evaluaciones` | `competencia_id` | `competencias` | `id` | NO ACTION | NO ACTION |
| `evaluaciones` | `asignacion_curso_id` | `asignaciones_cursos` | `id` | NO ACTION | NO ACTION |
| `sedes` | `colegio_id` | `colegios` | `id` | NO ACTION | NO ACTION |
| `cargos` | `concepto_id` | `conceptos_pago` | `id` | NO ACTION | NO ACTION |
| `cargos` | `matricula_id` | `matriculas` | `id` | NO ACTION | NO ACTION |
| `horarios_clases` | `aula_id` | `aulas` | `id` | NO ACTION | NO ACTION |
| `horarios_clases` | `asignacion_curso_id` | `asignaciones_cursos` | `id` | NO ACTION | NO ACTION |
| `aulas` | `sede_id` | `sedes` | `id` | NO ACTION | NO ACTION |
| `competencias` | `asignatura_id` | `asignaturas` | `id` | NO ACTION | NO ACTION |
| `asignaciones_cursos` | `seccion_id` | `secciones` | `id` | NO ACTION | NO ACTION |
| `asignaciones_cursos` | `asignatura_id` | `asignaturas` | `id` | NO ACTION | NO ACTION |
| `asignaciones_cursos` | `docente_id` | `docentes` | `id` | NO ACTION | NO ACTION |
| `documentos` | `usuario_propietario_id` | `usuarios` | `id` | NO ACTION | NO ACTION |
| `matriculas` | `anio_academico_id` | `anios_academicos` | `id` | NO ACTION | NO ACTION |
| `matriculas` | `seccion_id` | `secciones` | `id` | NO ACTION | NO ACTION |
| `matriculas` | `estudiante_id` | `estudiantes` | `id` | NO ACTION | NO ACTION |
| `registros_calificaciones` | `evaluacion_id` | `evaluaciones` | `id` | NO ACTION | NO ACTION |
| `registros_calificaciones` | `matricula_id` | `matriculas` | `id` | NO ACTION | NO ACTION |
| `asignaturas_grados` | `grado_id` | `grados` | `id` | NO ACTION | NO ACTION |
| `asignaturas_grados` | `asignatura_id` | `asignaturas` | `id` | NO ACTION | NO ACTION |
| `grados` | `nivel_educativo_id` | `niveles_educativos` | `id` | NO ACTION | NO ACTION |
| `apoderados` | `usuario_id` | `usuarios` | `id` | NO ACTION | NO ACTION |
| `aplicaciones_pagos` | `cargo_id` | `cargos` | `id` | NO ACTION | NO ACTION |
| `aplicaciones_pagos` | `pago_id` | `pagos` | `id` | NO ACTION | NO ACTION |
| `comprobantes_pago` | `pago_id` | `pagos` | `id` | NO ACTION | NO ACTION |
| `resultados_competencias_periodo` | `periodo_academico_id` | `periodos_academicos` | `id` | NO ACTION | NO ACTION |
| `resultados_competencias_periodo` | `competencia_id` | `competencias` | `id` | NO ACTION | NO ACTION |
| `resultados_competencias_periodo` | `matricula_id` | `matriculas` | `id` | NO ACTION | NO ACTION |
| `secciones` | `anio_academico_id` | `anios_academicos` | `id` | NO ACTION | NO ACTION |
| `secciones` | `sede_id` | `sedes` | `id` | NO ACTION | NO ACTION |
| `secciones` | `grado_id` | `grados` | `id` | NO ACTION | NO ACTION |
| `secciones` | `docente_tutor_id` | `docentes` | `id` | NO ACTION | NO ACTION |
| `asistencia_estudiantes` | `matricula_id` | `matriculas` | `id` | NO ACTION | NO ACTION |
| `asistencia_estudiantes` | `registrado_por` | `usuarios` | `id` | NO ACTION | NO ACTION |
| `estudiantes_apoderados` | `apoderado_id` | `apoderados` | `id` | NO ACTION | NO ACTION |
| `estudiantes_apoderados` | `estudiante_id` | `estudiantes` | `id` | NO ACTION | NO ACTION |
| `estudiantes` | `usuario_id` | `usuarios` | `id` | NO ACTION | NO ACTION |
| `docentes` | `usuario_id` | `usuarios` | `id` | NO ACTION | NO ACTION |
| `usuarios_roles` | `rol_id` | `roles` | `id` | NO ACTION | NO ACTION |
| `usuarios_roles` | `usuario_id` | `usuarios` | `id` | NO ACTION | NO ACTION |

## 3. Linaje funcional por procesos

### 3.1 Admisión y matrícula

**Entrada:** formulario del estudiante, catálogo de grados, sección, sede y año académico.

**Proceso:** registrar estudiante; seleccionar sección; validar cupos, vigencia y ausencia de matrícula duplicada; crear matrícula.

**Destino:** `matriculas`, listado por sección y reportes de matrícula.

**Comprobación necesaria:** `matriculas.anio_academico_id` debe corresponder al año de su sección. Esta coherencia no queda garantizada únicamente por FKs separadas.

### 3.2 Cursos y horarios

**Entrada:** asignaturas, grados, docentes, secciones, aulas.

**Proceso:** asignar asignaturas y docentes; programar clases y validar solapamientos.

**Destino:** `asignaciones_cursos`, `horarios_clases`, horario visible para docentes y alumnos.

**Comprobación necesaria:** evitar choques de aula, sección y docente; validar que la asignatura corresponda al grado.

### 3.3 Evaluaciones, notas y boleta

**Entrada:** evaluación creada por docente, competencia, periodo y matrícula.

**Proceso:** registrar nivel de logro/nota; aplicar reglas de evaluación vigentes; consolidar resultados por periodo y competencia.

**Destino:** `registros_calificaciones`, `resultados_competencias_periodo`, boleta académica.

**Pendiente de verificación:** la lógica de consolidación y emisión de boleta debe estar en aplicación, consulta, procedimiento o servicio; no se deduce de la estructura SQL.

### 3.4 Asistencia

**Entrada:** matrícula, fecha y estado de asistencia, usuario que registra.

**Proceso:** validar fecha, matrícula y evitar duplicidad según política de registro; calcular asistencias e inasistencias.

**Destino:** `asistencia_estudiantes`, indicadores y reportes.

### 3.5 Finanzas

**Entrada:** matrícula y concepto de cobro.

**Proceso:** generar cargo, registrar pago, distribuir importe pagado entre cargos, actualizar saldos/estados, emitir comprobante.

**Destino:** `cargos`, `pagos`, `aplicaciones_pagos`, `comprobantes_pago`, estado de cuenta.

**Reglas:** suma aplicada ≤ pago confirmado; monto aplicado ≤ saldo del cargo; evitar comprobantes duplicados; estados coherentes con importes. Estas validaciones requieren implementación y pruebas.

### 3.6 Seguridad y comunicaciones

**Entrada:** cuentas, roles, autor del comunicado y destinatarios.

**Proceso:** autorizar acciones según rol; publicar comunicado; registrar lectura; cargar documentos.

**Destino:** `usuarios`, `usuarios_roles`, `comunicados`, `destinatarios_comunicados`, `documentos`.

**Privacidad:** limitar acceso a datos de menores y a archivos; registrar accesos y cambios sensibles cuando corresponda.

## 4. Matriz resumida origen → proceso → destino

| Origen | Proceso o transformación propuesta | Destino | Evidencia |
|---|---|---|---|
| estudiantes + secciones | Alta de matrícula y validaciones | matriculas | FK estructurales; proceso por implementar/verificar |
| asignaturas + docentes + secciones | Asignación de enseñanza | asignaciones_cursos | FK estructurales |
| asignaciones_cursos + aulas | Programación de clases | horarios_clases | FK estructurales |
| matriculas + evaluaciones | Registro de calificación | registros_calificaciones | FK estructurales |
| registros_calificaciones + competencias + periodos_academicos | Consolidación académica | resultados_competencias_periodo | Lógica por verificar |
| matriculas | Registro de asistencia | asistencia_estudiantes | FK estructurales |
| matriculas + conceptos_pago | Generación de deuda | cargos | FK estructurales |
| pagos + cargos | Aplicación de importes | aplicaciones_pagos | FK estructurales |
| pagos | Emisión de comprobante | comprobantes_pago | FK estructurales |
| comunicados + usuarios | Distribución a destinatarios | destinatarios_comunicados | FK estructurales |

## 5. Consultas de verificación en DataGrip

```sql
-- Recuento de tablas y columnas
SELECT COUNT(*) AS tablas
FROM information_schema.TABLES
WHERE TABLE_SCHEMA = DATABASE() AND TABLE_TYPE = 'BASE TABLE';

SELECT COUNT(*) AS columnas
FROM information_schema.COLUMNS
WHERE TABLE_SCHEMA = DATABASE();

-- Inventario de claves foráneas
SELECT TABLE_NAME, COLUMN_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME
FROM information_schema.KEY_COLUMN_USAGE
WHERE TABLE_SCHEMA = DATABASE() AND REFERENCED_TABLE_NAME IS NOT NULL
ORDER BY TABLE_NAME, COLUMN_NAME;
```

## 6. Pendientes para linaje técnico de extremo a extremo

1. Identificar endpoint, pantalla o archivo que crea cada registro.
2. Identificar consultas, vistas, procedimientos, triggers y tareas programadas que transforman los datos.
3. Registrar las reglas de cálculo de notas, saldos y asistencia.
4. Identificar destino exacto de cada reporte y sus filtros.
5. Registrar responsable, periodicidad, retención, permisos y auditoría de cada dato.
6. Validar que los nombres traducidos coincidan con la base desplegada y actualizar el backend.

## 7. Diccionario de correspondencia de nombres

| Tabla original | Tabla traducida | Columna original | Columna traducida |
|---|---|---|---|
| `academic_periods` | `periodos_academicos` | `id` | `id` |
| `academic_periods` | `periodos_academicos` | `academic_year_id` | `anio_academico_id` |
| `academic_periods` | `periodos_academicos` | `name` | `nombre` |
| `academic_periods` | `periodos_academicos` | `start_date` | `fecha_inicio` |
| `academic_periods` | `periodos_academicos` | `end_date` | `fecha_fin` |
| `academic_years` | `anios_academicos` | `id` | `id` |
| `academic_years` | `anios_academicos` | `school_id` | `colegio_id` |
| `academic_years` | `anios_academicos` | `year_number` | `numero_anio` |
| `academic_years` | `anios_academicos` | `start_date` | `fecha_inicio` |
| `academic_years` | `anios_academicos` | `end_date` | `fecha_fin` |
| `academic_years` | `anios_academicos` | `status` | `estado` |
| `announcement_recipients` | `destinatarios_comunicados` | `announcement_id` | `comunicado_id` |
| `announcement_recipients` | `destinatarios_comunicados` | `user_id` | `usuario_id` |
| `announcement_recipients` | `destinatarios_comunicados` | `read_at` | `fecha_lectura` |
| `announcements` | `comunicados` | `id` | `id` |
| `announcements` | `comunicados` | `author_user_id` | `usuario_autor_id` |
| `announcements` | `comunicados` | `title` | `titulo` |
| `announcements` | `comunicados` | `content` | `contenido` |
| `announcements` | `comunicados` | `created_at` | `fecha_creacion` |
| `assessments` | `evaluaciones` | `id` | `id` |
| `assessments` | `evaluaciones` | `course_assignment_id` | `asignacion_curso_id` |
| `assessments` | `evaluaciones` | `academic_period_id` | `periodo_academico_id` |
| `assessments` | `evaluaciones` | `competency_id` | `competencia_id` |
| `assessments` | `evaluaciones` | `title` | `titulo` |
| `assessments` | `evaluaciones` | `assessment_date` | `fecha_evaluacion` |
| `assessments` | `evaluaciones` | `max_score` | `puntaje_maximo` |
| `campuses` | `sedes` | `id` | `id` |
| `campuses` | `sedes` | `school_id` | `colegio_id` |
| `campuses` | `sedes` | `name` | `nombre` |
| `campuses` | `sedes` | `address` | `direccion` |
| `charges` | `cargos` | `id` | `id` |
| `charges` | `cargos` | `enrollment_id` | `matricula_id` |
| `charges` | `cargos` | `concept_id` | `concepto_id` |
| `charges` | `cargos` | `amount` | `monto` |
| `charges` | `cargos` | `due_date` | `fecha_vencimiento` |
| `charges` | `cargos` | `status` | `estado` |
| `class_schedules` | `horarios_clases` | `id` | `id` |
| `class_schedules` | `horarios_clases` | `course_assignment_id` | `asignacion_curso_id` |
| `class_schedules` | `horarios_clases` | `classroom_id` | `aula_id` |
| `class_schedules` | `horarios_clases` | `weekday` | `dia_semana` |
| `class_schedules` | `horarios_clases` | `start_time` | `hora_inicio` |
| `class_schedules` | `horarios_clases` | `end_time` | `hora_fin` |
| `classrooms` | `aulas` | `id` | `id` |
| `classrooms` | `aulas` | `campus_id` | `sede_id` |
| `classrooms` | `aulas` | `name` | `nombre` |
| `classrooms` | `aulas` | `capacity` | `capacidad` |
| `competencies` | `competencias` | `id` | `id` |
| `competencies` | `competencias` | `subject_id` | `asignatura_id` |
| `competencies` | `competencias` | `name` | `nombre` |
| `competencies` | `competencias` | `description` | `descripcion` |
| `course_assignments` | `asignaciones_cursos` | `id` | `id` |
| `course_assignments` | `asignaciones_cursos` | `section_id` | `seccion_id` |
| `course_assignments` | `asignaciones_cursos` | `subject_id` | `asignatura_id` |
| `course_assignments` | `asignaciones_cursos` | `teacher_id` | `docente_id` |
| `documents` | `documentos` | `id` | `id` |
| `documents` | `documentos` | `owner_user_id` | `usuario_propietario_id` |
| `documents` | `documentos` | `name` | `nombre` |
| `documents` | `documentos` | `storage_key` | `clave_almacenamiento` |
| `documents` | `documentos` | `mime_type` | `tipo_mime` |
| `documents` | `documentos` | `uploaded_at` | `fecha_carga` |
| `education_levels` | `niveles_educativos` | `id` | `id` |
| `education_levels` | `niveles_educativos` | `name` | `nombre` |
| `enrollments` | `matriculas` | `id` | `id` |
| `enrollments` | `matriculas` | `student_id` | `estudiante_id` |
| `enrollments` | `matriculas` | `section_id` | `seccion_id` |
| `enrollments` | `matriculas` | `academic_year_id` | `anio_academico_id` |
| `enrollments` | `matriculas` | `enrolled_at` | `fecha_matricula` |
| `enrollments` | `matriculas` | `status` | `estado` |
| `grade_records` | `registros_calificaciones` | `id` | `id` |
| `grade_records` | `registros_calificaciones` | `assessment_id` | `evaluacion_id` |
| `grade_records` | `registros_calificaciones` | `enrollment_id` | `matricula_id` |
| `grade_records` | `registros_calificaciones` | `numeric_score` | `calificacion_numerica` |
| `grade_records` | `registros_calificaciones` | `achievement_level` | `nivel_logro` |
| `grade_records` | `registros_calificaciones` | `observation` | `observacion` |
| `grade_subjects` | `asignaturas_grados` | `grade_id` | `grado_id` |
| `grade_subjects` | `asignaturas_grados` | `subject_id` | `asignatura_id` |
| `grades` | `grados` | `id` | `id` |
| `grades` | `grados` | `education_level_id` | `nivel_educativo_id` |
| `grades` | `grados` | `grade_number` | `numero_grado` |
| `grades` | `grados` | `name` | `nombre` |
| `guardians` | `apoderados` | `id` | `id` |
| `guardians` | `apoderados` | `user_id` | `usuario_id` |
| `guardians` | `apoderados` | `first_name` | `nombres` |
| `guardians` | `apoderados` | `last_name` | `apellidos` |
| `guardians` | `apoderados` | `phone` | `telefono` |
| `guardians` | `apoderados` | `email` | `correo` |
| `payment_allocations` | `aplicaciones_pagos` | `id` | `id` |
| `payment_allocations` | `aplicaciones_pagos` | `payment_id` | `pago_id` |
| `payment_allocations` | `aplicaciones_pagos` | `charge_id` | `cargo_id` |
| `payment_allocations` | `aplicaciones_pagos` | `amount` | `monto` |
| `payment_concepts` | `conceptos_pago` | `id` | `id` |
| `payment_concepts` | `conceptos_pago` | `name` | `nombre` |
| `payment_receipts` | `comprobantes_pago` | `id` | `id` |
| `payment_receipts` | `comprobantes_pago` | `payment_id` | `pago_id` |
| `payment_receipts` | `comprobantes_pago` | `receipt_type` | `tipo_comprobante` |
| `payment_receipts` | `comprobantes_pago` | `series` | `serie` |
| `payment_receipts` | `comprobantes_pago` | `receipt_number` | `numero_comprobante` |
| `payment_receipts` | `comprobantes_pago` | `issued_at` | `fecha_emision` |
| `payment_receipts` | `comprobantes_pago` | `status` | `estado` |
| `payments` | `pagos` | `id` | `id` |
| `payments` | `pagos` | `amount` | `monto` |
| `payments` | `pagos` | `method` | `metodo` |
| `payments` | `pagos` | `reference` | `referencia` |
| `payments` | `pagos` | `paid_at` | `fecha_pago` |
| `payments` | `pagos` | `status` | `estado` |
| `period_competency_results` | `resultados_competencias_periodo` | `id` | `id` |
| `period_competency_results` | `resultados_competencias_periodo` | `enrollment_id` | `matricula_id` |
| `period_competency_results` | `resultados_competencias_periodo` | `academic_period_id` | `periodo_academico_id` |
| `period_competency_results` | `resultados_competencias_periodo` | `competency_id` | `competencia_id` |
| `period_competency_results` | `resultados_competencias_periodo` | `achievement_level` | `nivel_logro` |
| `period_competency_results` | `resultados_competencias_periodo` | `conclusion` | `conclusion` |
| `roles` | `roles` | `id` | `id` |
| `roles` | `roles` | `name` | `nombre` |
| `schools` | `colegios` | `id` | `id` |
| `schools` | `colegios` | `name` | `nombre` |
| `schools` | `colegios` | `modular_code` | `codigo_modular` |
| `schools` | `colegios` | `ugel` | `ugel` |
| `schools` | `colegios` | `address` | `direccion` |
| `schools` | `colegios` | `email` | `correo` |
| `schools` | `colegios` | `active` | `activo` |
| `sections` | `secciones` | `id` | `id` |
| `sections` | `secciones` | `academic_year_id` | `anio_academico_id` |
| `sections` | `secciones` | `campus_id` | `sede_id` |
| `sections` | `secciones` | `grade_id` | `grado_id` |
| `sections` | `secciones` | `name` | `nombre` |
| `sections` | `secciones` | `capacity` | `capacidad` |
| `sections` | `secciones` | `tutor_teacher_id` | `docente_tutor_id` |
| `student_attendance` | `asistencia_estudiantes` | `id` | `id` |
| `student_attendance` | `asistencia_estudiantes` | `enrollment_id` | `matricula_id` |
| `student_attendance` | `asistencia_estudiantes` | `attendance_date` | `fecha_asistencia` |
| `student_attendance` | `asistencia_estudiantes` | `status` | `estado` |
| `student_attendance` | `asistencia_estudiantes` | `observation` | `observacion` |
| `student_attendance` | `asistencia_estudiantes` | `recorded_by` | `registrado_por` |
| `student_guardians` | `estudiantes_apoderados` | `student_id` | `estudiante_id` |
| `student_guardians` | `estudiantes_apoderados` | `guardian_id` | `apoderado_id` |
| `student_guardians` | `estudiantes_apoderados` | `relationship` | `parentesco` |
| `student_guardians` | `estudiantes_apoderados` | `is_primary` | `es_principal` |
| `student_guardians` | `estudiantes_apoderados` | `financially_responsible` | `responsable_economico` |
| `students` | `estudiantes` | `id` | `id` |
| `students` | `estudiantes` | `user_id` | `usuario_id` |
| `students` | `estudiantes` | `student_code` | `codigo_estudiante` |
| `students` | `estudiantes` | `first_name` | `nombres` |
| `students` | `estudiantes` | `last_name` | `apellidos` |
| `students` | `estudiantes` | `document_number` | `numero_documento` |
| `students` | `estudiantes` | `birth_date` | `fecha_nacimiento` |
| `students` | `estudiantes` | `status` | `estado` |
| `subjects` | `asignaturas` | `id` | `id` |
| `subjects` | `asignaturas` | `code` | `codigo` |
| `subjects` | `asignaturas` | `name` | `nombre` |
| `teachers` | `docentes` | `id` | `id` |
| `teachers` | `docentes` | `user_id` | `usuario_id` |
| `teachers` | `docentes` | `first_name` | `nombres` |
| `teachers` | `docentes` | `last_name` | `apellidos` |
| `teachers` | `docentes` | `specialty` | `especialidad` |
| `teachers` | `docentes` | `active` | `activo` |
| `user_roles` | `usuarios_roles` | `user_id` | `usuario_id` |
| `user_roles` | `usuarios_roles` | `role_id` | `rol_id` |
| `users` | `usuarios` | `id` | `id` |
| `users` | `usuarios` | `username` | `nombre_usuario` |
| `users` | `usuarios` | `email` | `correo` |
| `users` | `usuarios` | `password_hash` | `hash_contrasena` |
| `users` | `usuarios` | `active` | `activo` |
| `users` | `usuarios` | `created_at` | `fecha_creacion` |
