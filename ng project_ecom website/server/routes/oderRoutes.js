const express = require("express");
const orderRouter = express.Router();
const { getAllOrders, getOrderById, addOrder, updateOrder, deleteOrder } = require("../controllers/orderController");

orderRouter.get("/", getAllOrders); 

orderRouter.get("/:id", getOrderById);  

orderRouter.post("/", addOrder);   

orderRouter.patch("/:id", updateOrder); 

orderRouter.delete("/:id", deleteOrder); 

module.exports = orderRouter;














// const express = require('express')
// const { Order } = require('../model/order')
// const orderrouter = express.Router();
// orderrouter.get('/all_products', async (req, res) => {
//     const products = await Product.find()
//     res.send(products)
// })
// orderrouter.get('/:id', async (req, res) => {
//     const data = await User.findById(req.params.id);
//     res.send(data);
// })
// orderrouter.post('/order', async (req, res) => {
//     const data = await User.create(req.body);
//     res.send("ok");
// })

// orderrouter.patch('/:id', async (req, res) => {
//     const data = await User.findByIdAndUpdate(req.params.id, req.body);
//     res.send(data);
// })
// orderrouter.delete('/:id', async (req, res) => {
//     const data = await User.findByIdAndDelete(req.params.id);
//     res.send(data);
// })

// module.exports = orderrouter;