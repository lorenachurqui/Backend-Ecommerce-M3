class ProductRepository {
  async getAll() { throw new Error('Method not implemented'); }
  async getById(id) { throw new Error('Method not implemented'); }
  async create(product) { throw new Error('Method not implemented'); }
  async update(id, product) { throw new Error('Method not implemented'); }
  async delete(id) { throw new Error('Method not implemented'); }
}

module.exports = ProductRepository;

/*const Product = require('../models/Product');

class ProductRepository {
  async getAll() {
    try {
      return await Product.find(); 
    } catch (error) {
      throw new Error(`Error al obtener productos: ${error.message}`);
    }
  }

  async getById(id) {
    try {
      return await Product.findById(id);
    } catch (error) {
      throw new Error(`Error al obtener producto por ID: ${error.message}`);
    }
  }

  async create(product) {
    try {
      const newProduct = new Product(product);
      return await newProduct.save();
    } catch (error) {
      throw new Error(`Error al crear producto: ${error.message}`);
    }
  }

  async update(id, product) {
    try {
      return await Product.findByIdAndUpdate(id, product, { new: true });
    } catch (error) {
      throw new Error(`Error al actualizar producto: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      return await Product.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(`Error al eliminar producto: ${error.message}`);
    }
  }
}

module.exports = ProductRepository;
*/