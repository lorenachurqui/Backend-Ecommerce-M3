class Coupon {
  constructor({ code, discount, expiresAt, createdAt, updatedAt }) {
    this.code = code;
    this.discount = discount;
    this.expiresAt = expiresAt;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Coupon;