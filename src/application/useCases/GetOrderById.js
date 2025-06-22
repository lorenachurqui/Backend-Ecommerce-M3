const Order = require('../../domain/entities/Order');

class GetOrderById {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute(orderId) {
        const orderData = await this.orderRepository.getById(orderId);
        //return new Order(orderData);
        return new Order(
            orderData.customerId,
            orderData.details,
            orderData.totalAmount,
            orderData.status,
            orderData.orderDate,
            orderData.deliveryDate
        );
    }
}

module.exports = GetOrderById;