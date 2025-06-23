const mongoose = require('../mongoose');

const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true, trim: true },
  discount: { type: Number, required: true }, // Porcentaje de descuento 10%
  expiresAt: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Coupon', couponSchema);