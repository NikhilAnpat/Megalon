const express = require("express");
const router = express.Router();
const appService = require("../Service/AppService");

router.post("/register", async (req, res) => {
  try {
    const customer = req.body;
    const registeredCustomer = await appService.register(customer);
    res.status(201).json(registeredCustomer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isAuthenticated = await appService.signIn(email, password);
    if (isAuthenticated) {
      res.status(200).json({ message: "Authentication successful" });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/restaurants", async (req, res) => {
  try {
    const restaurants = await appService.showAllRestro();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/order", async (req, res) => {
  try {
    const { customerId, restroId, items } = req.body;
    const order = await appService.orderItem(customerId, restroId, items);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
