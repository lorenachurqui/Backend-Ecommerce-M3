/*const express = require('express');
const router = express.Router();

module.exports = (productController) => {
  router.post('/', (req, res) => productController.create(req, res));  
  router.get('/', (req, res) => productController.getAll(req, res));
  router.get('/:idproducto', (req, res) => productController.getAll(req, res));
  return router;
};
*/

const express = require('express');
const { verifyToken } = require('../middlewares/authJwt');
const { verifyRole } = require('../middlewares/authRoles');

module.exports = (productController) => {
  const router = express.Router();
  
  //solo admin puede crear
  router.post(
    '/',
    verifyToken,
    verifyRole('admin'),
    (req, res) => productController.create(req, res)
  );

  router.get('/', (req, res) => productController.getAll(req, res));
  router.get('/:idproducto', (req, res) => productController.getAll(req, res));

  return router;
};