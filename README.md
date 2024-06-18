# curso-node-tsc-express-prisma

# Documento de requisitos

## Resumen

El desarrollo consistirá en la creación de un gestor de usuarios para una plataforma de elearning (back-end)

- Los usuarios se presentarán en formato de tabla paginada, que permitirá realizar un filtrado de los mismos, así como realizar las operaciones básicas de creación, edición y borrado de usuarios.

- El objetivo del desarrollo será la presentación y validación de la idea de forma privada, no siendo relevantes aspectos como la autenticación o gestión de roles/permisos.

## Definición de entidades

El sistema manejará una única entidad "Usuario", compuesta por los siguientes campos:

- username: Nombre de usuario.
  Podrá contener únicamente letras minúsculas y números.
  No se admitirán acentos.
  No podrá empezar por un número.
  No podrán existir dos usuarios con el mismo username.
  Su longitud deberá estar comprendida entre 6 y 15 caracteres.
- name: El nombre y apellidos del usuario
  Podrá contener letras mayúsculas y minúsculas, espacios y guiones.
  Se admiten acentos.
  Ninguna palabra podrá empezar, ni terminar, por un guión.
  No podrá contener múltiples espacios, ni guiones, de forma consecutiva.
  Su longitud deberá estar comprendida entre 2 y 30 caracteres.
- role: El rol del usuario.
  Un único rol por usuario.
  Los roles disponibles serán "profesor", "alumno" u "otro".
- isActive: El estado de activación del usuario.
  Los valores posibles son "Activo" o "Inactivo".

## Requisitos

- Los datos se presentarán al cliente en formato tabla.
- El cliente podrá filtrar los elementos en base a los siguientes criterios:
  - Filtro por name: Texto libre que permita mostrar sólo aquellos elementos cuyo "Nombre" contenga el término de búsqueda, en cualquier posición. Este filtro no será sensible a mayúsculas y minúsculas.
  - Filtro por activos o inactivos
- El usuario podrá ordenar los datos en base a los sgts criterios:
  - Por defecto: El orden de creación de los elementos.
  - Por name: alfabético ascendente
  - Por role: Ordenados por su rol. Primero “profesor”, después “alumno” y en último lugar “Otro”.
  - Por activación: Por su estado de activación, primero activos y posteriormente inactivos.
- La tabla de elementos se presentará al usuario en formato paginado.
- El tamaño por defecto de la página será de 10 elementos / página
  El usuario podrá modificar este tamaño
- La navegación entre páginas deberá ser libre, pudiendo avanzar a la página deseada.
- El usuario podrá añadir nuevos elementos a la tabla, mediante un formulario:
  Los campos "Username" y "Nombre" estarán inicialmente vacíos.
- El campo de "Activo" estará marcado inicialmente como "Inactivo", y podrá ser modificado.
- El campo de "Rol" estará marcado inicialmente como "Profesor" y podrá ser modificado.
- Los campos del formulario deberán ser previamente validados, antes de proceder a su envío.
- El usuario podrá editar los datos de cualquier elemento de la tabla
