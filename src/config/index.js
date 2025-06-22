require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  refreshSecret: process.env.REFRESH_SECRET || 'mi_refresh_secreto',
  DB_TYPE: process.env.DB_TYPE,
};