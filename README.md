# API REST con Node.js, Express, TypeScript y MongoDB

Este proyecto es una API RESTful desarrollada con **Node.js**, **Express**, **TypeScript** y **MongoDB**. La API permite la creación, lectura, actualización y eliminación de datos (CRUD) en una base de datos MongoDB.

## Características

- **Node.js** como entorno de ejecución.
- **Express** como framework web.
- **TypeScript** para tipado estático y desarrollo robusto.
- **MongoDB** como base de datos NoSQL.
- Soporte para **JWT (JSON Web Token)** para la autenticación y protección de rutas.

## Instalación

Sigue estos pasos para clonar y ejecutar el proyecto:

1. Clona este repositorio:
   ```bash
   https://github.com/sotoflore/API-REST-Con-Nodejs-Express-TypeScript-MongoBD.git
   ```
2. Entra en el directorio del proyecto:

   ```bash
   cd API-REST-Con-Nodejs-Express-TypeScript-MongoDB
   ```
3. Instala las dependencias:

   ```bash
   npm install
   ```
3. Crea un archivo .env en la raíz del proyecto y añade las siguientes variables:

   ```bash
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mi_base_de_datos
   JWT_SECRET=tu_secreto_jwt
   ```
4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```
   Visita **`http://localhost:5000`** en tu navegador o herramienta como Postman para interactuar con la API.

## Scripts Disponibles
- **`npm run build`**: Compila el proyecto de TypeScript a JavaScript.
- **`npm run dev`**: Inicia el servidor en modo de desarrollo utilizando nodemon.
- **`npm start`**: Inicia el servidor en modo producción.
