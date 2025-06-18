const RegisterCustomer = require('../../application/useCases/RegisterCustomer');
const CustomerDTO = require('../../application/dtos/CustomerDTO');

class CustomerController {
  constructor(customerRepository) {
    this.registerCustomer = new RegisterCustomer(customerRepository);
  }

  async register(req, res) {
    try {
      const customer = await this.registerCustomer.execute(req.body);
      res.status(201).json(new CustomerDTO(customer));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = CustomerController;