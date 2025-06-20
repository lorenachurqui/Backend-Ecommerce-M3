const express = require('express');
const config = require('./config');

//Repositorios
const MongoProductRepository = require('./infraestructure/repositories/MongoProductRepository');
const MongoCustomerRepository = require('./infraestructure/repositories/MongoCustomerRepository');
const MongoOrderRepository = require('./infraestructure/repositories/MongoOrderRepository');

//Controladores
const ProductController = require('./adapters/controllers/ProductController');
const CustomerController = require('./adapters/controllers/CustomerController');
const OrderController = require('./adapters/controllers/OrderController');

//Rutas
const productRoutes = require('./adapters/routes/productRoutes');
const customerRoutes = require('./adapters/routes/customerRoutes');
const orderRoutes = require('./adapters/routes/orderRoutes');


const { verifyToken } = require('./adapters/middlewares/authJwt');

const app = express();
const port = config.port;

// Dependencies
const productRepository = new MongoProductRepository();
const customerRepository = new MongoCustomerRepository();
const orderRepository = new MongoOrderRepository();

const productController = new ProductController(productRepository);
const customerController = new CustomerController(customerRepository);
const orderController = new OrderController(orderRepository);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes 
app.use('/api/v1/products', verifyToken, productRoutes(productController));
app.use('/api/v1/customers', customerRoutes(customerController));
app.use('/api/v1/orders', verifyToken, orderRoutes(orderController));

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server!' });
});

// Start Server
app.listen(port, () => {
  console.log(`E-commerce server running on port ${port}`);
});