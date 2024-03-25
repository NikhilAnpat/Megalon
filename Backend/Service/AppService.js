const appRepo = require("../Repo/AppRepo");

class AppService {
  async register(customer) {
    try {
      const cus = await appRepo.createCustomer(customer);
      return cus;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async signIn(email, password) {
    try {
      let flag = false;
      const cust1 = await appRepo.login(email, password);
      if (
        cust1 !== null &&
        cust1.cust1.email === email &&
        emp.cust1.password === password
      ) {
        flag = true;
        return flag;
      } else {
        throw new Error(" Invalid Credentials");
      }
    } catch (error) {
      throw new Error("Error : " + error.message);
    }
  }

  async showAllRestro() {
    const restro = await appRepo.showAllRestaurant();
    return restro;
  }

  async orderItem(customerId, restroId, items) {
    const order = await appRepo.finalOrder(customerId, restroId, items);

    return order;
  }
}

module.exports = new AppService();
