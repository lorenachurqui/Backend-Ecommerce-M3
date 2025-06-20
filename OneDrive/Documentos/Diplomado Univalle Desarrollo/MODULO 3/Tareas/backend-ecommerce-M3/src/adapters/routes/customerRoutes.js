const express = require('express');
const router = express.Router();

module.exports = (customerController) => {
  router.get('/', (req, res) => customerController.getAll(req, res));
  router.post('/', (req, res) => customerController.register(req, res));
  return router;
};