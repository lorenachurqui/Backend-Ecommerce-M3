class OrderDetalleDTO {
    constructor(orderDetalle) {
        this.productId = orderDetalle.productId;
        this.productName = orderDetalle.productName;
        this.quantity = orderDetalle.quantity;
        this.unitPrice = orderDetalle.unitPrice;
        this.subtotal = orderDetalle.subtotal;
    }
}

module.exports = OrderDetalleDTO;