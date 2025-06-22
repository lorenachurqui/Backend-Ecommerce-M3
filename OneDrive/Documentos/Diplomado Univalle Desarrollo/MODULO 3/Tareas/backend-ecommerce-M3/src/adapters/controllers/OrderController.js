const CreateOrder = require('../../application/useCases/CreateOrder');
const OrderDTO = require('../../application/dtos/OrderDTO');

class OrderController {
  constructor(orderRepository) {
    this.createOrder = new CreateOrder(orderRepository);
    this.orderRepository = orderRepository;
  }

  async create(req, res) {
    try {
      const order = await this.createOrder.execute(req.body);
      console.log('Order creado:', order);
      res.status(201).json(new OrderDTO(order));
    } catch (error) {
      console.error('❌ Error en OrderController:', error);
      res.status(400).json({ message: error.message });
    }
  }

 async getAll(req, res) {
    try {
      const orders = await this.orderRepository.getAll();
      res.status(200).json(orders.map(order => new OrderDTO(order)));
    } catch (error) {
      console.error('❌ Error al obtener órdenes:', error);
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
  try {
    const order = await this.orderRepository.getById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Orden no encontrada' });
    res.status(200).json(new OrderDTO(order));
  } catch (error) {
    console.error('❌ Error al obtener orden por ID:', error);
    res.status(500).json({ message: error.message });
  }
}
}

module.exports = OrderController;