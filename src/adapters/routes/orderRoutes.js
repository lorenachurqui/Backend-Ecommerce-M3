const express = require('express');
const router = express.Router();

module.exports = (orderController) => {
  router.post('/', (req, res) => orderController.create(req, res));
  return router;
};