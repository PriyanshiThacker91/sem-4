const express = require("express");
const categoryRouter = express.Router();
const { getAllCategories, getCategoryById, addCategory, updateCategory, deleteCategory } = require("../controllers/categoryController");


categoryRouter.get("/", getAllCategories); 
categoryRouter.get("/:id", getCategoryById);  
categoryRouter.post("/", addCategory);   
categoryRouter.patch("/:id", updateCategory); 
categoryRouter.delete("/:id", deleteCategory); 
    
module.exports = categoryRouter;












// const express =require('express')
// const { Category } = require('../model/category')
// const categoryrouter=express.Router();
// categoryrouter.get('/all_products',async(req,res)=>{
//     const products= await Product.find()
//     res.send(products)
// })
// categoryrouter.get('/:id',async(req,res)=>{
// const data=await User.findById(req.params.id);
// res.send(data);
// })
// categoryrouter.post('/order',async(req,res)=>{
// const data=await User.create(req.body);
// res.send("ok");
// })

// categoryrouter.patch('/:id',async(req,res)=>{
// const data=await User.findByIdAndUpdate(req.params.id,req.body);
// res.send(data);
// })
// categoryrouter.delete('/:id',async(req,res)=>{
// const data=await User.findByIdAndDelete(req.params.id);
// res.send(data);
// })

// module.exports=categoryrouter;