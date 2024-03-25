class Order {
  constructor(id, customerId, items, totalAmount) {
    this.id = id;
    this.customerId = customerId;
    this.items = items;
    this.totalAmount = totalAmount;
  }
}

module.exports = new Order();

