# API REST de ferrocarriles del oeste
- Conexión con base de datos mySQL en localhost.
- Forma de realizar peticiones:
  - endpoint /api/nombre_tabla
  - no es necesaria la extensión *.php
  - paginación: nada 50 primeros, 2 50 segundos, 3 50 terceros... parámetro "page".
  - búsqueda según parámetro por cualquiera de los campos de cada tabla.
  - en caso de inserciones se requieren todos los campos en el cuerpo y ningún parámetro.
  - en caso de actualizaciones se requerirá el id como parámetro y el campo a actualizar en el cuerpo.
  - en caso de borrado se requerirá el id como parámetro.
- Añadir multimedia:
  - codificar fichero en base64 https://www.base64encoder.io/
  