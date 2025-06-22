const OrderRepository = require('../../domain/repositories/OrderRepository');
const OrderModel = require('../database/models/OrderModel');
const Order = require('../../domain/entities/Order');

class MongoOrderRepository extends OrderRepository {
  async getAll() {
    //const orders = await OrderModel.find();
    const orders = await OrderModel.find().populate('customerId');
    //return orders.map(o => new Order(o.toObject()));
    return orders.map(o => o.toObject());

  }

  async getById(id) {
  const order = await OrderModel.findById(id).populate('customerId', 'name email');
  return order?.toObject();
}

  async create(order) {
  console.log('🛠 Datos recibidos en el repositorio:', order);
  try {
    const newOrder = await OrderModel.create(order);
    console.log('✅ Orden guardada:', newOrder);
    return newOrder.toObject();
   // return new Order(newOrder.toObject());
  } catch (error) {
    console.error('❌ Error al guardar en MongoOrderRepository:', error);
    throw error;
  }
}

}

module.exports = MongoOrderRepository;