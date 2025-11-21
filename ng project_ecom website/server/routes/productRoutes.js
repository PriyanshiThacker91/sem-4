const express = require("express");
const productRouter = express.Router();
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } = require("../controllers/productController");

productRouter.get("/", getAllProducts); 
productRouter.get("/:id", getProductById);  
productRouter.post("/", addProduct);   
productRouter.patch("/:id", updateProduct); 
productRouter.delete("/:id", deleteProduct); 

module.exports = productRouter;












// const express = require('express')
// const { Product } = require('../model/product')
// const productrouter = express.Router();
// productrouter.get('/all_products', async (req, res) => {
//     const products = await Product.find()
//     res.send(products)
// })
// productrouter.get('/:id', async (req, res) => {
//     const data = await User.findById(req.params.id);
//     res.send(data);
// })
// productrouter.post('/order', async (req, res) => {
//     const data = await User.create(req.body);
//     res.send("ok");
// })

// productrouter.patch('/:id', async (req, res) => {
//     const data = await User.findByIdAndUpdate(req.params.id, req.body);
//     res.send(data);
// })
// productrouter.delete('/:id', async (req, res) => {
//     const data = await User.findByIdAndDelete(req.params.id);
//     res.send(data);
// })

// module.exports = productrouter;