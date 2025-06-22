const OrderDetalle = require('./OrderDetalle');

class Order {
  constructor(customerId, details, totalAmount, status, orderDate, deliveryDate) {
    this.customerId = customerId;
    this.details = Array.isArray(details)
      ? details.map(prod => new OrderDetalle(
          prod.productId,
          prod.productName,
          prod.quantity,
          prod.unitPrice
        ))
      : [];

    this.totalAmount = totalAmount;
    this.status = status;
    this.orderDate = orderDate;
    this.deliveryDate = deliveryDate;
  }
}

module.exports = Order;
/*const OrderDetalle = require('./OrderDetalle');

class Order {
    constructor(customerId, details, totalAmount, status, orderDate, deliveryDate) {
        this.customerId = customerId;
        this.details = details.map(prod => new OrderDetalle(prod.productId, prod.productName, prod.quantity, prod.unitPrice));
        this.totalAmount = totalAmount;
        this.status = status; // pendiente, pagado, enviado
        this.orderDate = orderDate; // FechaCompra
        this.deliveryDate = deliveryDate; // FechaEntrega
    }
}
module.exports = Order;
*/