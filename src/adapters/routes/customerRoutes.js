const express = require('express');
const router = express.Router();

module.exports = (customerController) => {
  router.post('/register', (req, res) => customerController.register(req, res));
  return router;
};