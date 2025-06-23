// Imports
const express = require('express');
const config = require('./config');
const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./infraestructure/docs/swaggerConfig');
const { verifyToken } = require('./adapters/middlewares/authJwt');

//Repositorios
const MongoProductRepository = require('./infraestructure/repositories/MongoProductRepository');
const MongoCustomerRepository = require('./infraestructure/repositories/MongoCustomerRepository');
const MongoOrderRepository = require('./infraestructure/repositories/MongoOrderRepository');
const MySQLProductRepository = require('./infraestructure/repositories/MySQLProductRepository');
const MongoUserRepository     = require('./infraestructure/repositories/MongoUserRepository');
const MongoCouponRepository = require('./infraestructure/repositories/MongoCouponRepository'); 

//Controladores
const ProductController = require('./adapters/controllers/ProductController');
const CustomerController = require('./adapters/controllers/CustomerController');
const OrderController = require('./adapters/controllers/OrderController');
const CouponController = require('./adapters/controllers/CouponController');

// Casos de Uso y Servicios
const PasswordHasher = require('./infraestructure/services/PasswordHasher');
const TokenGenerator          = require('./infraestructure/services/TokenGenerator');
const SignIn                  = require('./application/useCases/SignIn');
const SignUp              = require('./application/useCases/SignUp');

//Rutas
const productRoutes = require('./adapters/routes/productRoutes');
const customerRoutes = require('./adapters/routes/customerRoutes');
const orderRoutes = require('./adapters/routes/orderRoutes');

const userRoutes = require('./adapters/routes/userRoutes');
const couponRoutes = require('./adapters/routes/couponRoutes');

// App Setup
const app = express();
const port = config.port;
console.log('>>> Config leída:', config);


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Dependencies
const dbType = config.DB_TYPE || 'mongodb'; // 'mongo' o 'mysql'
let productRepository;
console.log('>>> DB_TYPE:', dbType);
if (dbType === 'mysql') {
  productRepository = new MySQLProductRepository();
} else {
  productRepository = new MongoProductRepository();
}
//const productRepository = new MongoProductRepository();
const customerRepository = new MongoCustomerRepository();
const orderRepository = new MongoOrderRepository();
const couponRepository = new MongoCouponRepository();

//Instancias de Controladores
const productController = new ProductController(productRepository);
const customerController = new CustomerController(customerRepository);
const orderController = new OrderController(orderRepository);
const couponController = new CouponController(couponRepository);

// —– SETUP AUTH —–
const userRepo       = new MongoUserRepository();
const passwordHasher = new PasswordHasher();
const tokenGen       = new TokenGenerator();

const signInUseCase  = new SignIn(userRepo, passwordHasher, tokenGen);
const signUpUseCase = new SignUp(userRepo, passwordHasher);

const authRoutes = require('./adapters/routes/authRoutes')(signInUseCase, signUpUseCase);

 app.use('/api/v1/auth', authRoutes);


// Refresh Token route
const refreshTokenRoute = require('./adapters/routes/refreshTokenRoutes');
app.use('/api/v1/auth', refreshTokenRoute);

// ——— SETUP SIGNUP ———

app.use('/api/v1/users',express.json(),userRoutes(signUpUseCase));

// Configuración de Swagger UI
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Rutas protegidas 
app.use('/api/v1/products', verifyToken, productRoutes(productController));
app.use('/api/v1/customers', customerRoutes(customerController));
app.use('/api/v1/orders', verifyToken, orderRoutes(orderController));
app.use('/api/v1/coupons', express.json(), couponRoutes(couponController));

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server!' });
});

// Start Server
app.listen(port, () => {
  console.log(`E-commerce server running on port ${port}`);
});