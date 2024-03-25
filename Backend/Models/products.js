class Products {
  constructor(id,name, price,restroId) {
    this.id=id;
    this.restroId= restroId;
    this.name = name;
    this.price = price;
  }
}

module.exports = new Products();
