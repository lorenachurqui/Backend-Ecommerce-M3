const CreateProduct = require('../../application/useCases/CreateProduct');
const ProductDTO = require('../../application/dtos/ProductDTO');

class ProductController {
  constructor(productRepository) {
    this.createProduct = new CreateProduct(productRepository);
    this.productRepository = productRepository;
  }

  async create(req, res) {
    try {
      const product = await this.createProduct.execute(req.body);
      console.log('Producto creado:', product);
      res.status(201).json(new ProductDTO(product));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getAll(req, res) {
  try {
    const products = await this.productRepository.getAll();
    res.status(200).json(products.map(product => new ProductDTO(product)));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
}

module.exports = ProductController;