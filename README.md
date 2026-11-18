# Sistema de Gestión Escolar

**Primaria y Secundaria · Perú**<br>
**Versión 1.0 — Prototipo**<br>
**Fecha.** [dd/mm/aaaa]<br>
**Responsables.** [nombres y roles del equipo]

## 1. Información del proyecto

### Descripción y problemática

El prototipo permite recorrer en el navegador los procesos académicos, administrativos y financieros de un colegio peruano. Atiende la dispersión de información entre padrones, registros de asistencia y notas, y controles de pensiones, que dificulta consultar el estado de un estudiante y seguir cada trámite.

### Objetivos

**Objetivo general.** Validar la navegación y los flujos principales del sistema con una demostración interactiva para los tres perfiles escolares.

**Objetivos específicos**

- Simular el registro de estudiantes, la matrícula con control de cupos y el pago de pensiones con comprobante.
- Permitir que el docente consulte su padrón y registre asistencia, niveles de logro y observaciones por competencia.
- Mostrar al alumno su horario, materiales, calificaciones y boleta imprimible.
- Documentar el modelo MySQL de referencia y preparar los espacios para los flujogramas y las capturas.

### Alcance y usuarios

| Perfil | Funcionalidades |
| --- | --- |
| Administrador | Indicadores, usuarios, estudiantes, docentes, matrículas, grados y secciones, cursos, horarios, pagos, consultas de asistencia y evaluaciones, reportes y configuración institucional. |
| Docente | Cursos asignados, horarios, padrón por sección, asistencia, evaluaciones, registro de notas por bimestre y competencia, materiales y comunicados. |
| Alumno | Cursos y horarios de su sección, notas, boleta de ejemplo o con notas registradas, aula virtual, materiales, documentos y cuenta. |

El alcance cubre **31 rutas** de los tres perfiles, además del inicio de sesión. El prototipo funciona con datos ficticios, sin backend, conexión a MySQL, autenticación real ni APIs externas. El año escolar de referencia es 2026. La boleta, las constancias y los comprobantes se presentan como documentos simulados.

### Tecnologías

- Angular 22 con componentes standalone, Angular Router y Angular Material.
- TypeScript, HTML5 y SCSS.
- Servicios Angular y datos ficticios en archivos TypeScript. `sessionStorage` conserva el perfil al recargar la pestaña y se limpia al cerrar sesión. `localStorage` conserva los registros administrativos y docentes en el mismo navegador y origen, incluso después de cerrar sesión.
- Angular CLI y npm para el entorno de desarrollo. Vitest para las pruebas automatizadas. MySQL forma parte del modelo de datos previsto.

### Ejecutar desde WebStorm

1. Abre la carpeta que contiene `package.json` y selecciona un intérprete de Node.js compatible con Angular CLI. El proyecto se verificó con **Node.js 24.22.1**.
2. En la terminal integrada de WebStorm, ejecuta estos comandos en PowerShell.

   ```powershell
   npm.cmd ci
   npm.cmd start
   ```
3. Abre [el acceso al prototipo](http://localhost:4200/login). Elige **Administrador**, **Docente** o **Alumno** y pulsa **Iniciar sesión** con las credenciales ficticias precargadas. Usa **Cerrar sesión** para explorar otro perfil.

El script `start` invoca `ng serve` con el CLI instalado en el proyecto. También puedes iniciarlo desde la lista de scripts npm de WebStorm. En macOS o Linux, usa `npm` en lugar de `npm.cmd`.

| Perfil | Correo ficticio | Ruta inicial |
| --- | --- | --- |
| Administrador | `admin@colegio.example` | `/admin/dashboard` |
| Docente | `docente@colegio.example` | `/docente/dashboard` |
| Alumno | `alumno@colegio.example` | `/alumno/dashboard` |

La contraseña precargada de demostración es `Escolar2026`. El formulario valida el formato del correo y la presencia de una contraseña. El selector de perfil determina el panel de destino.

### Compilar y ejecutar las pruebas

```powershell
npm.cmd run build
npm.cmd test -- --watch=false
```

La compilación de producción se genera en `dist/sistema-escolar/`.

### Recorrido de demostración

1. Entra como Administrador y prueba la búsqueda de estudiantes, el flujo de matrícula y el registro de una pensión.
2. Entra como Docente, selecciona **Matemática · Secundaria · 2.° A** y guarda un nivel de logro y una observación para Lucía Flores Salazar.
3. Entra como Alumno y abre **Mis notas** en el mismo bimestre y luego **Boleta de notas**. Alterna el origen de las calificaciones y descarga la boleta en HTML para abrirla o imprimirla desde el navegador.

## 2. Flujogramas

[Consultar el PDF de flujogramas](docs/flujogramas/Diagramas_de_flujo_Sistema_de_Gestion_Escolar.pdf).

Los apartados reservan espacio para imágenes individuales. Guarda cada imagen en `docs/flujogramas/` y quita los delimitadores del comentario Markdown correspondiente.

### Acceso al sistema

<!-- ![Flujograma de acceso al sistema](docs/flujogramas/acceso-al-sistema.png) -->

### Registro de usuarios

<!-- ![Flujograma de registro de usuarios](docs/flujogramas/registro-de-usuarios.png) -->

### Registro de alumnos

<!-- ![Flujograma de registro de alumnos](docs/flujogramas/registro-de-alumnos.png) -->

### Matrículas

<!-- ![Flujograma de matrículas](docs/flujogramas/matriculas.png) -->

### Apertura del año escolar

<!-- ![Flujograma de apertura del año escolar](docs/flujogramas/apertura-del-anio-escolar.png) -->

### Asignación académica

<!-- ![Flujograma de asignación académica](docs/flujogramas/asignacion-academica.png) -->

### Pagos

<!-- ![Flujograma de pagos](docs/flujogramas/pagos.png) -->

### Asistencia

<!-- ![Flujograma de asistencia](docs/flujogramas/asistencia.png) -->

### Evaluaciones y notas

<!-- ![Flujograma de evaluaciones y notas](docs/flujogramas/evaluaciones-y-notas.png) -->

## 3. Modelo de base de datos

El inventario de referencia contiene **33 tablas**, **163 columnas** y **46 referencias de clave foránea** según las exportaciones MySQL. La tabla siguiente usa los nombres físicos que figuran en esas exportaciones. Los nombres en español del anexo de linaje corresponden al mapa de migración, cuya aplicación queda por confirmar.

| Módulo | Tablas | Entidades |
| --- | ---: | --- |
| Institucional | 4 | `schools`, `campuses`, `academic_years`, `academic_periods` |
| Seguridad | 3 | `users`, `roles`, `user_roles` |
| Personas | 4 | `students`, `teachers`, `guardians`, `student_guardians` |
| Académico | 9 | `education_levels`, `grades`, `sections`, `subjects`, `grade_subjects`, `enrollments`, `course_assignments`, `classrooms`, `class_schedules` |
| Evaluaciones | 4 | `competencies`, `assessments`, `grade_records`, `period_competency_results` |
| Asistencia | 1 | `student_attendance` |
| Finanzas | 5 | `payment_concepts`, `charges`, `payments`, `payment_allocations`, `payment_receipts` |
| Comunicaciones | 3 | `announcements`, `announcement_recipients`, `documents` |
| **Total** | **33** | |

- **Diagrama entidad-relación.** [Consultar el diagrama ER](docs/base-datos/diagramas/diagrama-entidad-relacion.png).
- **Diccionario de datos.** [Consultar la guía de lectura y los CSV](docs/base-datos/diccionario-de-datos.md).
- **Linaje de datos.** [Consultar el documento de referencia](docs/base-datos/data-lineage/Data_Lineage_Sistema_Escolar.md). El anexo distingue las referencias estructurales verificadas en metadatos de los recorridos funcionales propuestos.

## 4. Mockups

Las fichas describen pantallas del prototipo que se pueden abrir en el navegador. Para insertar una captura, guárdala con la ruta indicada en el comentario de su ficha y quita los delimitadores `<!--` y `-->`.

Carpetas de capturas por perfil. [Login](docs/mockups/login/) · [Administrador](docs/mockups/administrador/) · [Docente](docs/mockups/docente/) · [Alumno](docs/mockups/alumno/).

### Login

**Usuario.** Administrador, Docente o Alumno · **Ruta.** `/login`<br>
**Objetivo.** Entrar a la demostración con el perfil elegido.<br>
**Funciones.** Cambiar de perfil, validar el formulario y abrir la recuperación simulada de contraseña.

<!-- ![Pantalla de inicio de sesión](docs/mockups/login/login.png) -->

### Dashboard administrador

**Usuario.** Administrador · **Ruta.** `/admin/dashboard`<br>
**Objetivo.** Consultar el estado general del colegio.<br>
**Funciones.** Revisar seis indicadores, gráficos de asistencia y recaudación, actividad reciente, últimas matrículas y avisos.

<!-- ![Dashboard del administrador](docs/mockups/administrador/dashboard.png) -->

### Gestión de estudiantes

**Usuario.** Administrador · **Ruta.** `/admin/estudiantes`<br>
**Objetivo.** Mantener el padrón escolar.<br>
**Funciones.** Buscar por nombre, DNI o código, combinar filtros, registrar y editar estudiantes, y consultar su ficha.

<!-- ![Gestión de estudiantes](docs/mockups/administrador/estudiantes.png) -->

### Matrículas

**Usuario.** Administrador · **Ruta.** `/admin/matriculas`<br>
**Objetivo.** Inscribir al alumno en un año, grado y sección.<br>
**Funciones.** Buscar al estudiante, elegir su sección, verificar cupos y duplicados, confirmar y consultar una constancia simulada.

<!-- ![Flujo de matrículas](docs/mockups/administrador/matriculas.png) -->

### Pagos

**Usuario.** Administrador · **Ruta.** `/admin/pagos`<br>
**Objetivo.** Consultar el estado de pensiones y registrar pagos.<br>
**Funciones.** Revisar indicadores de morosidad, estados de cuenta e historial, cobrar una pensión y consultar el comprobante simulado.

<!-- ![Gestión de pagos](docs/mockups/administrador/pagos.png) -->

### Dashboard docente

**Usuario.** Docente · **Ruta.** `/docente/dashboard`<br>
**Objetivo.** Identificar las tareas y clases del día.<br>
**Funciones.** Consultar cursos asignados, horario, padrón, evaluaciones próximas o pendientes de calificar y comunicados recientes.

<!-- ![Dashboard del docente](docs/mockups/docente/dashboard.png) -->

### Registro de notas

**Usuario.** Docente · **Ruta.** `/docente/notas`<br>
**Objetivo.** Registrar el logro por competencia.<br>
**Funciones.** Elegir curso, sección, bimestre y competencia. Guardar niveles AD, A, B o C y observaciones, incluso con filas pendientes.

<!-- ![Registro de notas por competencia](docs/mockups/docente/notas.png) -->

### Asistencia

**Usuario.** Docente y Administrador · **Rutas.** `/docente/asistencia`, `/admin/asistencia`<br>
**Objetivo.** Registrar y consultar la asistencia por sección y fecha.<br>
**Funciones.** Marcar presente, ausente, tardanza o justificado, y revisar el resumen y las filas sin marcar.

<!-- ![Registro de asistencia docente](docs/mockups/docente/asistencia.png) -->
<!-- ![Consulta administrativa de asistencia](docs/mockups/administrador/asistencia.png) -->

### Dashboard alumno

**Usuario.** Alumno · **Ruta.** `/alumno/dashboard`<br>
**Objetivo.** Consultar la información diaria de su matrícula.<br>
**Funciones.** Revisar grado y sección, clases, cursos, evaluaciones, notas recientes y comunicados.

<!-- ![Dashboard del alumno](docs/mockups/alumno/dashboard.png) -->

### Horarios

**Usuarios y rutas.** Administrador en `/admin/horarios`, Docente en `/docente/horarios` y Alumno en `/alumno/horarios`.<br>
**Objetivo.** Ubicar las clases de la semana.<br>
**Funciones.** Filtrar por día. Administración puede filtrar también por sección.

<!-- ![Horario administrativo](docs/mockups/administrador/horarios.png) -->
<!-- ![Horario docente](docs/mockups/docente/horarios.png) -->
<!-- ![Horario del alumno](docs/mockups/alumno/horarios.png) -->

### Boleta de notas

**Usuario.** Alumno · **Ruta.** `/alumno/boleta`<br>
**Objetivo.** Consultar el logro por competencia en un documento imprimible.<br>
**Funciones.** Elegir bimestre, alternar entre el ejemplo y las notas guardadas por Docente, consultar conclusiones descriptivas y descargar el HTML.

<!-- ![Boleta de notas del alumno](docs/mockups/alumno/boleta.png) -->
