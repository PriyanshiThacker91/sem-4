const express = require("express");
const cartRouter = express.Router();
const { getAllCarts, getCartById, addCart, updateCart, deleteCart } = require("../controllers/cartController");

cartRouter.get("/", getAllCarts); 
cartRouter.get("/:id", getCartById);  
cartRouter.post("/", addCart);   
cartRouter.patch("/:id", updateCart); 
cartRouter.delete("/:id", deleteCart); 

module.exports = cartRouter;


//GETALL http://localhost:7000/user/all_users

//GETBYID http://localhost:7000/user/65abc123ef45678901234567


// POST http://localhost:7000/user

// PATCH http://localhost:7000/user/65abc123ef45678901234567

//DELETE http://localhost:7000/user/65abc123ef45678901234567
















// const express = require('express')
// const { Cart } = require('../model/cart')
// const cartrouter = express.Router();
// cartrouter.get('/all_products', async (req, res) => {
//     const products = await Product.find()
//     res.send(products)
// })
// cartrouter.get('/:id', async (req, res) => {
//     const data = await User.findById(req.params.id);
//     res.send(data);
// })
// cartrouter.post('/order', async (req, res) => {
//     const data = await User.create(req.body);
//     res.send("ok");
// })

// cartrouter.patch('/:id', async (req, res) => {
//     const data = await User.findByIdAndUpdate(req.params.id, req.body);
//     res.send(data);
// })
// cartrouter.delete('/:id', async (req, res) => {
//     const data = await User.findByIdAndDelete(req.params.id);
//     res.send(data);
// })

// module.exports = cartrouter;