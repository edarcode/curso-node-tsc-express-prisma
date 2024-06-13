#!/bin/bash

# Elimina la carpeta de migraciones
rm -rf prisma/migrations

# Restablece tu base de datos
npx prisma migrate reset --force

# Crea una nueva migración con un nombre específico
npx prisma migrate dev --name init --create-only

# Aplica todas las migraciones pendientes
npx prisma migrate deploy