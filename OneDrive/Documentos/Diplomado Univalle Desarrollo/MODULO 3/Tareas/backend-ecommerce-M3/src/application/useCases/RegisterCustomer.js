const Customer = require('../../domain/entities/Customer');

class RegisterCustomer {
  constructor(customerRepository) {
    this.customerRepository = customerRepository;
  }

  async execute(customerData) {
    const { name, email, address } = customerData;
    const customer = new Customer(name, email, address); // ✔️ ahora sí
    return await this.customerRepository.create(customer);
  }
}

module.exports = RegisterCustomer;