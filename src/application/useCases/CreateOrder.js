const Order = require('../../domain/entities/Order');

class CreateOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(data) {
    const {
      customerId,
      details,
      totalAmount,
      status = 'pendiente',
      orderDate = new Date(),
      deliveryDate = null
    } = data;

    if (!customerId) {
      throw new Error('El campo customerId es obligatorio');
    }
    if (!details || !Array.isArray(details) || details.length === 0) {
      throw new Error('Debe enviar al menos un producto en details');
    }
    if (!totalAmount || totalAmount < 0) {
      throw new Error('El campo totalAmount debe ser mayor o igual a 0');
    }

    const order = new Order(
      customerId,
      details,
      totalAmount,
      status,
      new Date(orderDate),
      deliveryDate ? new Date(deliveryDate) : null
    );

    return await this.orderRepository.create(order);
  }
}

module.exports = CreateOrder;
/*const Order = require('../../domain/entities/Order');

class CreateOrder {
  constructor(orderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(orderData) {
    const order = new Order(orderData);
    return await this.orderRepository.create(order);
  }
}

module.exports = CreateOrder;
*/