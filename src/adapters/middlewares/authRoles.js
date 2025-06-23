//const isAdmin = (req, res, next) =>

const verifyRole = (requiredRole) => {
  return (req, res, next) => {
    if (req.userRoles?.includes(requiredRole)) {
      return next();
    }
    return res.status(403).json({ mensaje: `Acceso denegado. Se requiere rol ${requiredRole}.` });
  };
};

module.exports = { verifyRole };