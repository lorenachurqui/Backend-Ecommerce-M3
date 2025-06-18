const Order = require('../../domain/entities/Order');

class GetOrderById {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute(orderId) {
        const orderData = await this.orderRepository.getById(orderId);
        return new Order(orderData);
    }
}

module.exports = GetOrderById;