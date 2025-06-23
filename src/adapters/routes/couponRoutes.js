const express = require('express');
const router = express.Router();

module.exports = (couponController) => {
  router.get('/', (req, res) => couponController.getAll(req, res));
  router.post('/', (req, res) => couponController.create(req, res));
  router.post('/apply', (req, res) => couponController.apply(req, res));
  return router;
};