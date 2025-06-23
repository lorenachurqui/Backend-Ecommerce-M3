const CouponRepository = require('../../domain/repositories/CouponRepository');
const CouponModel = require('../database/models/CouponModel');
const Coupon = require('../../domain/entities/Coupon');

class MongoCouponRepository extends CouponRepository {
  async create(coupon) {
    const newCoupon = await CouponModel.create(coupon);
    return new Coupon(newCoupon.toObject());
  }

  async findByCode(code) {
    const found = await CouponModel.findOne({ code });
    return found ? new Coupon(found.toObject()) : null;
  }

  async getAll() {
    const all = await CouponModel.find();
    return all.map(c => new Coupon(c.toObject()));
  }
}

module.exports = MongoCouponRepository;