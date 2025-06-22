## TAREA AVANCES EN EL PROYECTO
En base a lo visto en clases sobre el proyecto se debe incorporar lo siguiente:
1. Añadir la validación de vencimiento del token dentro del middleware de JWT
2. Añadir la funcionalidad de refresh token o actualizar token

## Desarrollo de tarea
Se implementaron los dos puntos requeridos:
## 1. Validación del vencimiento del token
authJwt.js intercepta las solicitudes protegidas y verifica el token enviado en el header Authorization. Si el token ha expirado, se detecta el error TokenExpiredError y se responde con un mensaje "Token vencido, genere uno nuevo" y un código 401. Si el token es inválido, también se responde con un error 401 y mensaje "Token inválido".

## 2. Funcionalidad de refresh token
Al iniciar sesión (POST /api/v1/auth/signin), el sistema genera y devuelve dos tokens:
* access token con expiración corta (7 minutos)
* refresh token con expiración prolongada (7 dias)

Se agregó el endpoint (POST /api/v1/auth/refresh) que permite generar un nuevo access token enviando el (refreshtoken) en el cuerpo de la solicitud. 
* El token es verificado usando una clave separada (refreshSecret) definida en .env
* Si es válido y no ha expirado, se genera un nuevo access token y se devuelve al cliente.

Se actualizaron los siguientes archivos:
* SignIn.js - genera y retorna ambos tokens
* AuthController.js - devuelve token y refresh en la respuesta de login
* refreshTokenRoute.js - endpoint para renovar el token
* .env
* config/index.js

## Pruebas realizadas
Fue probado desde Postman, validando:
* autenticación inicial con access y refresh token
* renovación de token expirado a través de /auth/refresh
* protección de rutas usando el middleware de validación JWT
