const jwt = require('jsonwebtoken');
const config = require('../../config');

class TokenGenerator {
  generate(payload) {
    return jwt.sign(
      { id: payload.id, roles: payload.roles },
      config.jwtSecret,
      { expiresIn: '30s' }
    );
  }

  generateRefresh(payload) {
    return jwt.sign(
        payload, config.refreshSecret, { expiresIn: '7d' }
    );
  }
}

module.exports = TokenGenerator;