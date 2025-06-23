const express = require('express');
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');

const CustomerController = require('./controllers/CustomerController');
const CustomerRepository = require('./repositories/CustomerRepository');
const customerRoutes = require('./routes/customerRoutes');

const OrderController = require('./controllers/OrderController');
const OrderRepository = require('./repositories/OrderRepository');
const orderRoutes = require('./routes/orderRoutes');

const CouponController = require('./controllers/CouponController');
const CouponRepository = require('./repositories/CouponRepository');
const couponRoutes = require('./routes/couponRoutes');

const app = express();
app.use(express.json());

const customerRepo = new CustomerRepository();
const customerController = new CustomerController(customerRepo);

const orderRepo = new OrderRepository();
const orderController = new OrderController(orderRepo);

const couponRepo = new CouponRepository();
const couponController = new CouponController(couponRepo);

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Configurar rutas
app.use('/productos', productRoutes);
app.use('/clientes', customerRoutes(customerController));
app.use('/orders', orderRoutes(orderController));
app.use('/cupones', couponRoutes(couponController));


app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));