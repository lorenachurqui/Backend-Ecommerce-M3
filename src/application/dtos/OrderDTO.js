const OrderDetalleDTO = require('./OrderDetalleDTO');

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