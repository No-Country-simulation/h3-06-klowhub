# h3-06-klowhub

# Monorepo con Next.js, NestJS y Shared

Este es un monorepo que contiene tres proyectos principales:

- **app**: Una aplicación Next.js con TypeScript.
- **api**: Una API construida con NestJS y TypeScript.
- **shared**: Una carpeta para tipos y utilidades compartidas entre `app` y `api`.

## Requisitos previos

- Tener **Node.js** (v14 o superior) instalado.
- Tener **pnpm** instalado (globalmente o como dependencia de desarrollo).

Puedes instalar `pnpm` globalmente ejecutando:

`npm install -g pnpm `

## Estructura del monorepo

```/monorepo
  /packages
    /app        # Aplicación Next.js
    /api        # API NestJS
    /shared     # Tipos y utilidades compartidas
  /node_modules
  package.json  # Dependencias y scripts del proyecto
  pnpm-workspace.yaml  # Configuración de pnpm para el monorepo
  tsconfig.json  # Configuración general de TypeScript
  README.md      # Este archivo
```

## Instalacion

### 1 - Clonar el repositorio

Primero, clona el repositorio en tu máquina local:

```
git clone https://github.com/No-Country-simulation/h3-06-klowhub.git
cd h3-06-klowhub
```

### 2 - Instalar las dependencias

Desde la raíz del proyecto, puedes instalar todas las dependencias del monorepo utilizando pnpm:

`pnpm install`

- Instalar dependencias en el frontend: `pnpm --filter app add [dependencias]`
- Instalar dependencias en el backend: ` pnpm --filter api add [dependencias]`
- Instalar dependencias compartidas en el root: ` pnpm add -w [dependencias]`

### 3 - Ejecutar los proyectos

Para trabajar con los proyectos, puedes ejecutar las siguientes tareas desde la raíz del monorepo:

- Correr entorno desarrollo frontend: desde el directorio raiz -> `pnpm run front:dev`
- Correr entorno desarroll backend: desde el directorio raiz -> ` pnpm run back:dev`
- Correr el proyecto entero (front y back): desde directorio raiz --> `pnpm run dev`

La front corre en localhost:4000
El back corre en localhost:3000

### 4 - Trabajar con shared

El proyecto shared contiene utilidades y tipos que son comunes tanto para la aplicación app como para la API api. Puedes importar desde shared de la siguiente manera en ambos proyectos.

Ejemplo: ``` import { SomeShareUtility } from '@shared/utils';

## Scripts Utiles

Instalar todas las dependencias: `pnpm install`
Limpiar monorepo: `pnpm prune`

## pnpm Workspaces

Este monorepo está configurado para usar pnpm workspaces, lo que permite gestionar dependencias de manera eficiente entre los distintos paquetes (app, api, shared). Las dependencias comunes solo se instalan una vez en la raíz del monorepo, lo que ayuda a optimizar el espacio en disco y la velocidad de instalación.

Cuando ejecutas comandos en los proyectos específicos (pnpm --filter), pnpm se asegura de que solo las dependencias necesarias se instalen o ejecuten para ese proyecto.

## Configuración de TypeScript

Este monorepo está configurado con un archivo tsconfig.json en la raíz para que los proyectos app y api hereden la configuración común. Además, la carpeta shared contiene tipos y utilidades que pueden ser utilizados por ambos proyectos.

## Prettier

No elimine los archivos de prettier de los directorios app y api por si al final se decide que cada uno utilice su propio prettierrc.
