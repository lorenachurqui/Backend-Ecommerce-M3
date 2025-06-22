class CustomerDTO {
    constructor(customer) {
        this.id = customer._id;
        this.name = customer.name;
        this.email = customer.email;
        this.address = customer.address;
    }
}

module.exports = CustomerDTO;