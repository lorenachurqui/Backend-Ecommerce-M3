## TAREA
Este proyecto cumple con los requerimientos planteados para la implementación de rutas y lógica de negocio utilizando MongoDB.

## Entidades
- Customer: Registro y consulta de clientes.
- Order: Registro de órdenes de compra y consulta de las mismas, tanto de forma general como individual.
- OrderDetalle: Subestructura utilizada dentro de las órdenes para almacenar la información de cada producto.

## Funcionalidades
- Implementación del método GET con MongoDB
Se crearon rutas para consultar información desde la base de datos NoSQL, incluyendo:
- Lista de productos (GET /products)
- Lista de clientes (GET /customers)
- Lista de órdenes (GET /orders)
- Consulta de orden individual (GET /orders/:id)
- Rutas GET y POST para entidades trabajadas
Se desarrollaron rutas GET y POST para las entidades Customer y Order, las cuales no formaban parte del repositorio base en MySQL.
- Adaptación de la arquitectura relacional a NoSQL

Incluye: entidades, casos de uso, controladores, repositorios y DTOs, adaptados para funcionar con MongoDB.

## Validación de la tarea
La implementación cubre todos los puntos solicitados:
- Rutas GET y POST activas para entidades nuevas en NoSQL.
- Estructura basada en principios  básicos de Clean Architecture adaptados a MongoDB.
- Uso de autenticación mediante token y separación de responsabilidades.
- Desarrollo centrado en las entidades propias Customer, Order y OrderDetalle.

## Pruebas con Postman
Para verificar el funcionamiento de las rutas implementadas en esta tarea, se recomienda el uso de Postman. 
A continuación, se detallan los pasos para realizar las pruebas correctamente:
- Ruta base: http://localhost:3000/api/v1/

- Encabezados para rutas:
  Authorization: Bearer <el_token> (para rutas protegidas)
  Content-Type: application/json (Solo en métodos POST)

- Rutas disponibles para prueba:
    GET /products → Lista de productos
    GET /customers → Lista de clientes
    GET /orders → Lista de órdenes con cliente y detalle
    GET /orders/:id → Consulta individual de una orden
    POST /customers → Crear nuevo cliente (requiere datos en el Body)
    POST /orders → Crear nueva orden (requiere datos en el Body)
    POST /products → Crear nuevo producto (requiere datos en el Body)