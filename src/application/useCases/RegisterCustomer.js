const Customer = require('../../domain/entities/Customer');

class RegisterCustomer {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }

    async execute(customerData) {
        const customer = new Customer(customerData);
        return await this.customerRepository.register(customer);
    }
}
module.exports = RegisterCustomer;