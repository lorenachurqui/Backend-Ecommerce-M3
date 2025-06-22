const RegisterCustomer = require('../../application/useCases/RegisterCustomer');
const CustomerDTO = require('../../application/dtos/CustomerDTO');

class CustomerController {
  constructor(customerRepository) {
    this.registerCustomer = new RegisterCustomer(customerRepository);
    this.customerRepository = customerRepository;
  }

  async register(req, res) {
    try {
      const customer = await this.registerCustomer.execute(req.body);
      console.log('Customer creado:', customer);
      res.status(201).json(new CustomerDTO(customer));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getAll(req, res) {
    try {
      const customers = await this.customerRepository.getAll();
      const dtos = customers.map(customer => new CustomerDTO(customer));
      res.status(200).json(dtos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = CustomerController;