## TAREA INTEGRANDO LO APRENDIDO

1. Agregar campo STOCK a productos
2. Validar rol "admin" para crear productos
3. Añadir las entidades: 
- Order: caso de uso y endpoints
- Cupons: caso de uso y endpoints
4. Realizar la documentacion adecuada de Order - y de todos sus endpoints

## Desarrollo de tarea
En base a los contenidos abordados en clase, se implementaron los siguientes puntos en el proyecto:

### 1. Agregar campo `stock` a productos

ya se realizó en anterior tarea.

### 2. Validar rol "admin" para crear productos

Se protegió la ruta `POST /api/v1/products` mediante middleware de autenticación JWT y verificación de rol:

- Solo usuarios con el rol `"admin"` pueden acceder.
- Usuarios sin permisos reciben `403 Forbidden` y un mensaje `"Requiere rol de administrador"`.

### 3. Añadir entidades: `Order` y `Cupons`

#### Ordenes (`Order`)

- Se creó la entidad y caso de uso `CreateOrder`.
- Endpoints añadidos:
  - `GET /api/v1/orders`: listar órdenes
  - `POST /api/v1/orders`: crear nueva orden
- Las rutas están protegidas por `verifyToken`.

#### Cupones (`Coupons`)

- Se implementaron dos casos de uso:
  - `CreateCoupon` para registrar
  - `ApplyCoupon` para aplicar un código
- Endpoints:
  - `POST /api/v1/coupons`: crear cupón
  - `POST /api/v1/coupons/apply`: aplicar/validar cupón
  - `GET /api/v1/coupons`: listar cupones existentes
- Se utilizó un `CouponDTO` para estandarizar las respuestas.

### 4. Documentación adecuada de Orders

- Se incorporaron los esquemas `Order` y `OrderInput` en `swaggerConfig.js`.
- Se documentaron los endpoints:
  - `GET /api/v1/orders`
  - `POST /api/v1/orders`
- Se incluyó autenticación con `BearerAuth`.
- La documentación se puede visualizar en `http://localhost:3000/api-docs`


## En Postman se validó:

- Creación de producto con usuario admin
- Rechazo de creación con usuario sin permisos
- Creación de órdenes correctamente con clientes y productos
- Aplicación exitosa de cupones activos
- Documentación Swagger visible y precisa para las rutas de órdenes