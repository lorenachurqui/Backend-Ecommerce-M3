const CustomerRepository = require('../../domain/repositories/CustomerRepository');
const CustomerModel = require('../database/models/CustomerModel');
const Customer = require('../../domain/entities/Customer');

class MongoCustomerRepository extends CustomerRepository {
  async getAll() {
    const customers = await CustomerModel.find();
    return customers.map(c => new Customer(c.toObject()));
  }
//el repositorio guarda
  async create(customer) {
    const newCustomer = await CustomerModel.create(customer);
    return new Customer(newCustomer.toObject());
  }
}

module.exports = MongoCustomerRepository;