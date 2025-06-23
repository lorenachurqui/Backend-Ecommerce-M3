class AuthController {
  constructor(signInUseCase, signUpUseCase) {
    this.signInUseCase = signInUseCase;
    this.signUpUseCase = signUpUseCase;
  }

  async signIn(req, res, next) {
    try {
      const { username, password } = req.body;
      const { user, token, refresh } = await this.signInUseCase.execute({ username, password });
      delete user.password;
      res.json({ user, token, refresh });
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }
   async signUp(req, res) {
    try {
      const { username, password, roles } = req.body;
      const nuevoUsuario = await this.signUpUseCase.execute({ username, password, roles });
      delete nuevoUsuario.password;
      res.status(201).json({ user: nuevoUsuario });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }
}

module.exports = AuthController;