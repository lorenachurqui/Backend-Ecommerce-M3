const express = require('express');
const router = express.Router();

module.exports = (orderController) => {
  router.get('/', (req, res) => orderController.getAll(req, res));
  router.get('/:id', orderController.getById.bind(orderController));
  router.post('/', (req, res) => orderController.create(req, res));
  return router;
};