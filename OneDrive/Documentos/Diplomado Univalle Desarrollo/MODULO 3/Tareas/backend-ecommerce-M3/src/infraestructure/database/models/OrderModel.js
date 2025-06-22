const mongoose = require('../mongoose');
const orderDetailSchema = require('./OrderDetalleModel');

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  details: { type: [orderDetailSchema], required: true },
  totalAmount: { type: Number, required: true, min: 0 },
  status: { type: String, enum: ['pendiente', 'pagado', 'enviado'], default: 'pendiente' },
  orderDate: { type: Date, required: true },
  deliveryDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);