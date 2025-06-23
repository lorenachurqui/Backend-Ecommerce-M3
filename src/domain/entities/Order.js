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
