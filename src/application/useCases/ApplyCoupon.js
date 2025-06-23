const Coupon = require('../../domain/entities/Coupon');

class ApplyCoupon {
  constructor(couponRepository) {
    this.couponRepository = couponRepository;
  }

  async execute(code) {
    const coupon = await this.couponRepository.findByCode(code);
    if (!coupon) {
      throw new Error('Cupón no válido');
    }

    if (new Date() > new Date(coupon.expiresAt)) {
      throw new Error('Cupón expirado');
    }

    return new Coupon(coupon);
  }
}

module.exports = ApplyCoupon;