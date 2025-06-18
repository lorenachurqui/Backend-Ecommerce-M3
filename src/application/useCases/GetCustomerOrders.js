const Order = require('../../domain/entities/Order');

class GetCustomerOrders {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }

    async execute(customerId) {
        const ordersData = await this.orderRepository.getAllByCustomer(customerId);
        return ordersData.map(order => new Order(order));
    }
}

module.exports = GetCustomerOrders;