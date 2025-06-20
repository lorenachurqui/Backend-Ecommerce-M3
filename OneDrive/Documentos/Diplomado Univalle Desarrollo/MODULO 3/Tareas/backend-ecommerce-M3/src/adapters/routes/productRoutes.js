const express = require('express');
const router = express.Router();

module.exports = (productController) => {
  router.post('/', (req, res) => productController.create(req, res));  
  router.get('/', (req, res) => productController.getAll(req, res));
  return router;
};