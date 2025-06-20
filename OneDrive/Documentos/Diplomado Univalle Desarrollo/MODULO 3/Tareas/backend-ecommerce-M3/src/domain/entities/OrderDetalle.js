class OrderDetalle {
    constructor(productId, productName, quantity, unitPrice) {
        this.productId = productId;
        this.productName = productName;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.subtotal = quantity * unitPrice;
    }
}
module.exports = OrderDetalle;