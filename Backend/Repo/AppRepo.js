const DbConnect = require("../DbConfig/DB_Connection");

class AppRepo {
  async createCustomer(customer) {
    const cust = await DbConnect.query(
      "INSERT INTO customerss(name, email, password, contact, address) VALUES(?,?,?,?,?)",
      [
        customer.name,
        customer.email,
        customer.password,
        customer.contact,
        customer.address,
      ]
    );
    console.log(cust);

    return cust.insertId;
  }

  async login(email, password) {
    const cust1 = await DbConnect.query(
      "SELECT * FROM users WHERE email = ? AND password = ?",
      [email, password]
    );

    console.log(cust1);

    return cust1;
  }

  async showAllRestaurant() {
    const retros = await DbConnect.query("select * FROM restro");
    return retros;
  }

  async menuForOrder(menuId) {
    const item = await DbConnect.query(
      "SELECT * from products WHERE productId = ?",
      [productId]
    );

    return item;
  }

  async finalOrder(customerId, restroId, item) {
    await DbConnect.query(
      "INSERT INTO Orders (orderId, customerId, restroId) VALUES (?, ?, ?)",
      [orderId, customerId, restroId]
    );

    for (const item of items) {
      await DbConnect.query(
        "INSERT INTO OrderItems (orderId, menuItemId, quantity) VALUES (?, ?, ?)",
        [orderId, item.menuItemId, item.quantity]
      );
    }

    return { orderId, customerId, restroId, items };
  }
}

module.exports = new AppRepo();
