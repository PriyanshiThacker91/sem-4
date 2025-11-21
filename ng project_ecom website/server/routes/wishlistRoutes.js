const express = require("express");
const { getAllWishlist, getByIdWishlist, postWishlist, updateWishlist, deleteWishlist } = require("../controllers/wishlistController");
const wishlistRouter = express.Router();

wishlistRouter.get("/user", getAllWishlist); 
wishlistRouter.get("/:id", getByIdWishlist);  
wishlistRouter.post("/", postWishlist);   
wishlistRouter.patch("/:id", updateWishlist); 
wishlistRouter.delete("/:id", deleteWishlist); 

module.exports = wishlistRouter;

//GETALL http://localhost:7000/user/all_users

//GETBYID http://localhost:7000/user/65abc123ef45678901234567


// POST http://localhost:7000/user

// PATCH http://localhost:7000/user/65abc123ef45678901234567

//DELETE http://localhost:7000/user/65abc123ef45678901234567






// const express = require('express')
// const { wishlist } = require('../model/wishlist')
// const wishlistrouter = express.Router();
// wishlistrouter.get('/all_products', async (req, res) => {
//     const products = await Product.find()
//     res.send(products)
// })
// wishlistrouter.get('/:id', async (req, res) => {
//     const data = await User.findById(req.params.id);
//     res.send(data);
// })
// wishlistrouter.post('/order', async (req, res) => {
//     const data = await User.create(req.body);
//     res.send("ok");
// })

// wishlistrouter.patch('/:id', async (req, res) => {
//     const data = await User.findByIdAndUpdate(req.params.id, req.body);
//     res.send(data);
// })
// wishlistrouter.delete('/:id', async (req, res) => {
//     const data = await User.findByIdAndDelete(req.params.id);
//     res.send(data);
// })

// module.exports = wishlistrouter;