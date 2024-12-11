
<h1 align = "center"> KLOWHUB </h1>
<p align = "center"><img src="https://i85.servimg.com/u/f85/19/88/52/56/klowhu11.png" /></p>
<hr>
<p align = "left">KlowHub es una plataforma SaaS diseñada para ser el núcleo de la comunidad global de desarrolladores y usuarios en el ecosistema No Code y Low Code. Con un enfoque en gestión de contenido y productos digitales de plataformas líderes como AppSheet y Power Apps, nuestra misión es ofrecer un entorno que facilite el aprendizaje continuo, fomente la colaboración entre profesionales y permita la monetización del conocimiento técnico. A continuación, se detallan las principales características que definirán la experiencia en KlowHub.</p>
<hr>


## Desarrollada con: 🛠️

![Vercel](https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![Typescrit](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Nest.js](https://img.shields.io/badge/NestJS-E0234E.svg?style=for-the-badge&logo=NestJS&logoColor=white)
![JWT](https://img.shields.io/badge/JSON%20Web%20Tokens-000000.svg?style=for-the-badge&logo=JSON-Web-Tokens&logoColor=white)
![Postgre](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white)
![ENV](https://img.shields.io/badge/.ENV-ECD53F.svg?style=for-the-badge&logo=dotenv&logoColor=black)
![Swagger](https://img.shields.io/badge/Swagger-85EA2D.svg?style=for-the-badge&logo=Swagger&logoColor=black)
![ESLINT](https://img.shields.io/badge/ESLint-4B32C3.svg?style=for-the-badge&logo=ESLint&logoColor=white)
![PRETTIER](https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032.svg?style=for-the-badge&logo=Git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?style=for-the-badge&logo=Visual-Studio-Code&logoColor=white)


## Equipo

### Team Leader 🚀
Completar nombre [Linkedin](https://www.linkedin.com/in)| [GitHub](https://github.com)

### UX
Completar nombre [Linkedin](https://www.linkedin.com/in)| [GitHub](https://github.com)

### QA TESTER
Luz Tabraj [Linkedin](www.linkedin.com/in/luz-tabraj)| [GitHub](https://github.com/luztabraj)

### FRONTEND 🖼️
Maria Villen [Linkedin](https://www.linkedin.com/in/maria-villen/)| [GitHub](https://github.com/MariaVillen)

### BACKEND 🧠💻
Completar nombre [Linkedin](https://www.linkedin.com/in)| [GitHub](https://github.com)
Completar nombre [Linkedin](https://www.linkedin.com/in)| [GitHub](https://github.com)
Completar nombre [Linkedin](https://www.linkedin.com/in)| [GitHub](https://github.com)

<hr>

### Documentacion

[Users Stories](https://docs.google.com/document/d/16x0sYgoeFEt4D3vPSPaTOTju1cOy-13f/edit?usp=sharing&ouid=100530841611688647093&rtpof=true&sd=true)

[Documentación Técnica]()

<hr>

### Deploy 🚀🚀

Puedes encontrar nuestra APP en el siguiente link: [[https://link](https://klowhubapp.vercel.app/)](https://klowhubapp.vercel.app/)
Puedes encontrar nuestra API en el siguiente link: [https://link]()
</br>


<hr>

### Requerimientos ✔📋

- Para poder correr el servidor necesitas tener instalado NODEJS y PNPM.
- Tambien necesitas una key de Google y configurarla para el servicio de Auth2 


<hr>

### **Instrucciones:**

### Estructura del monorepo 

Este es un monorepo que contiene tres proyectos principales:

- **app**: Una aplicación Next.js con TypeScript.
- **api**: Una API construida con NestJS y TypeScript.
- **shared**: Una carpeta para tipos y utilidades compartidas entre `app` y `api`.
  

### Requisitos previos

- Tener **Node.js** (v14 o superior) instalado.
- Tener **pnpm** instalado (globalmente o como dependencia de desarrollo).

Puedes instalar `pnpm` globalmente ejecutando:

`npm install -g pnpm `

### Estructura del monorepo

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


### **Instalación**


1 - Clonar el repositorio 

Primero, clona el repositorio en tu máquina local:

```
git clone https://github.com/No-Country-simulation/h3-06-klowhub.git
cd h3-06-klowhub
```

 2 - Instalar las dependencias 

Desde la raíz del proyecto, puedes instalar todas las dependencias del monorepo utilizando pnpm:

`pnpm install`

- Para instalar dependencias solo en el frontend: `pnpm --filter app add [dependencias]`
- Instalar dependencias solo en el backend: ` pnpm --filter api add [dependencias]`

 3 - Ejecutar los proyectos

Para trabajar con los proyectos, puedes ejecutar las siguientes tareas desde la raíz del monorepo:

- Correr entorno desarrollo frontend: desde el directorio raiz -> `pnpm run front:dev`
- Correr entorno desarroll backend: desde el directorio raiz -> ` pnpm run back:dev`
- Correr el proyecto entero (front y back): desde directorio raiz --> `pnpm run dev`

El front corre en localhost:4000
El back corre en localhost:3000

4 - Trabajar con shared 

El proyecto shared contiene utilidades y tipos que son comunes tanto para la aplicación app como para la API api. Puedes importar desde shared de la siguiente manera en ambos proyectos.

Ejemplo: ``` import { SomeShareUtility } from '@shared/utils';

### **Script Utiles**

Instalar todas las dependencias: `pnpm install`
Limpiar monorepo: `pnpm prune`

### **PNPM WORKSPACES**

Este monorepo está configurado para usar pnpm workspaces, lo que permite gestionar dependencias de manera eficiente entre los distintos paquetes (app, api, shared). Las dependencias comunes solo se instalan una vez en la raíz del monorepo, lo que ayuda a optimizar el espacio en disco y la velocidad de instalación.

Cuando ejecutas comandos en los proyectos específicos (pnpm --filter), pnpm se asegura de que solo las dependencias necesarias se instalen o ejecuten para ese proyecto.

### **CONFIGURACION DE TYPESCRIPT**

Este monorepo está configurado con un archivo tsconfig.json en la raíz para que los proyectos app y api hereden la configuración común. Además, la carpeta shared contiene tipos y utilidades que pueden ser utilizados por ambos proyectos.



> [!IMPORTANT]
> Deben agregarse las variables de entorno
> 
Debe agregarse un archivo .env en la carpeta ./packages/app

```
BACKEND_URL=[dirección backend]
SESSION_SECRET_KEY=[key]
```

 Debe agregarse un archivo .env en la carpeta ./packages/api

```
DB_CONNECTION=[mongodbase]
PORT=3000
MAIL_HOST=
EMAIL_USER=
EMAIL_PASSWORD=
MAIL_FROM=
```



