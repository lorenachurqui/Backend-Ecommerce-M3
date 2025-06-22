const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const router = express.Router();

router.post('/refresh', (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) return res.status(401).json({ message: 'Token de actualización no enviado' });

  jwt.verify(refreshToken, config.refreshSecret, (err, user) => {
    if (err) return res.status(403).json({ message: 'Refresh token inválido' });

    const newAccessToken = jwt.sign(
      { id: user.id, roles: user.roles },
      config.jwtSecret,
      { expiresIn: '15m' }
    );
    res.json({ token: newAccessToken });
  });
});

module.exports = router;