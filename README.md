# Bienvenido al respositorio prueba Inlaze
#### Acerca de este repositorio

En este repositorio se encuentra el codigo fuente del proyecto para aspirar al cargo de desarrollador Node para la empresa Inlanze usando NestJs/ReactJs  .
Se generaron dos proyectos mediante create-react-app y nest-cli  bajo  **Node 16  **  y SASS para los estilos.

---
#### Instalacion y uso

##### Instalacion
Para instalar los repositorios y empezar a trabajar sobre ellos lo uncio que debes hacer despues de clonarlo tu computador es correr el comando **`npm install` para instalar las dependencias se debe hacer esto tanto en el proyecto backend como en el frontend** y por ultimo **`npm start` para iniciar el servidor**.

##### Nota: Para esta prueba se uso una base de datos en memoria sqlite, por lo cual , si se reinicia el servidor, se perderan los datos.

###### Lista de rutas (Vistas frontend)
1.  / : Para ingresar a la pagina Login
2. /new-post : Para vista para ingresar un nuevo post
3. /all-post : Vista que muestra los post en general
4. /my-posts:  Vista encargada de mostrar los posts del usuario 

###### Lista de endpoints (recursos backend)
1. /user : Encargado del manejo de datos de usuarios
2. /auth : Encargado de manejar el logueo y registro 
3. /post : Encargado del manejo de datos de post
---


#### Tecnologias usadas en el front


Libreria  | Version
------------- | -------------
react  | 18.2.0
react-dom | 18.2.0
axios | 1.1.2
sass | 1.55.0
typescript | 4.8.4


#### Tecnologias usadas en el back


Libreria  | Version
------------- | -------------
nest  | 9.0
passport-jwt | 4.0.0
typescript | 4.8.4
typeorm | 0.3.11
sqlite3 | 5.1.4
class-validator | 0.12.2


