const { Router } = require('express');
const AuthController = require('../controllers/AuthController');

module.exports = (signInUseCase, signUpUseCase) => {
  const router = Router();
  //const controller = new AuthController(signInUseCase);
  const controller = new AuthController(signInUseCase, signUpUseCase);

  /**
   * @swagger
   * tags:
   *   name: Authentication
   *   description: Endpoints de autenticación
   */

  /**
   * @swagger
   * /api/v1/auth/signin:
   *   post:
   *     summary: Iniciar sesión
   *     tags: [Authentication]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/LoginRequest'
   *     responses:
   *       200:
   *         description: Login exitoso
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/AuthResponse'
   *       401:
   *         description: Credenciales inválidas
   */

  /**
   * @swagger
   * /api/v1/auth/signUp:
   *   post:
   *     summary: Registrar nuevo usuario
   *     tags: [Authentication]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *               - username
   *               - password
   *             properties:
   *               username:
   *                 type: string
   *               password:
   *                 type: string
   *               roles:
   *                 type: array
   *                 items:
   *                   type: string
   *                 example: ["admin"]
   *     responses:
   *       201:
   *         description: Usuario creado exitosamente
   *       400:
   *         description: Error al crear usuario
   */
  router.post('/signin', controller.signIn.bind(controller));
  router.post('/signup', controller.signUp.bind(controller));

  return router;
};
