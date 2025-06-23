class CouponDTO {
  constructor(coupon) {
    this.code = coupon.code;
    this.discount = coupon.discount;
    this.expiresAt = coupon.expiresAt;
  }
}

module.exports = CouponDTO;