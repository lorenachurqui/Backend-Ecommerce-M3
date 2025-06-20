const OrderDetalleDTO = require('./OrderDetalleDTO');

class OrderDTO {
  constructor(order) {
    this.id = order._id?.toString?.() || order.id;
    this.customer = {
      id: order.customerId?._id?.toString?.() || order.customerId,
      name: order.customerId?.name || null
    };
    this.totalAmount = order.totalAmount;
    this.status = order.status;
    this.orderDate = order.orderDate;
    this.deliveryDate = order.deliveryDate;
    this.details = Array.isArray(order.details)
      ? order.details.map(det => new OrderDetalleDTO(det))
      : [];
  }
}

module.exports = OrderDTO;

/*const OrderDetalleDTO = require('./OrderDetalleDTO');

class OrderDTO {
    constructor(order) {
        this.id = order.id;
        this.customerId = order.customerId;
        this.totalAmount = order.totalAmount;
        this.status = order.status;
        this.orderDate = order.orderDate;
        this.deliveryDate = order.deliveryDate;
        this.details = order.details.map(det => new OrderDetalleDTO(det));
    }
}

module.exports = OrderDTO;
*/