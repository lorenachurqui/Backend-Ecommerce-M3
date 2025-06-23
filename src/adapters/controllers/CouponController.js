const ApplyCoupon = require('../../application/useCases/ApplyCoupon');
const CreateCoupon = require('../../application/useCases/CreateCoupon');
const CouponDTO = require('../../application/dtos/CouponDTO');

class CouponController {
  constructor(couponRepository) {
    this.applyCoupon = new ApplyCoupon(couponRepository);
    this.createCoupon = new CreateCoupon(couponRepository);
    this.couponRepository = couponRepository;
  }

  async apply(req, res) {
    try {
      const { code } = req.body;
      const coupon = await this.applyCoupon.execute(code);
      console.log('Cupón aplicado:', coupon);
      res.status(200).json(new CouponDTO(coupon));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const coupons = await this.couponRepository.getAll();
      res.status(200).json(coupons.map(c => new CouponDTO(c)));
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const coupon = await this.createCoupon.execute(req.body);
      res.status(201).json(new CouponDTO(coupon));
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = CouponController;