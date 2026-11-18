# Diccionario de datos

Las exportaciones describen el modelo MySQL de referencia. Los nombres corresponden a las tablas y columnas de la exportación. El inventario por módulo está en el [README del proyecto](../../README.md#3-modelo-de-base-de-datos).

## Columnas

[Descargar la exportación de columnas](information_schema_COLUMNS.csv). Contiene 163 filas de metadatos para 33 tablas. El archivo está delimitado por comas y carece de fila de encabezados. Abre el CSV respetando las comillas, ya que algunos tipos de dato pueden contener comas.

| Posición | Contenido |
| ---: | --- |
| 1 | Nombre de la tabla |
| 2 | Posición de la columna en la tabla |
| 3 | Nombre de la columna |
| 4 | Tipo de dato declarado en MySQL |
| 5 | Si admite nulos |
| 6 | Indicador de clave de MySQL |
| 7 | Valor predeterminado exportado |
| 8 | Atributos adicionales, como `auto_increment` |
| 9 | Comentario de la columna |

## Claves foráneas

[Descargar la exportación de referencias](Result_1.csv). Contiene 46 filas. Cada fila identifica la tabla y columna de origen, la tabla y columna referenciadas, el nombre de la restricción y sus dos reglas referenciales.

El [linaje de datos](data-lineage/Data_Lineage_Sistema_Escolar.md) contiene la matriz documentada de reglas de actualización y eliminación y el mapa de nombres en español. [Consultar el diagrama entidad-relación](diagramas/diagrama-entidad-relacion.png).
