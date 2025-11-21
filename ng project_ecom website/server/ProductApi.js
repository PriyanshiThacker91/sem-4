const express = require('express')
const getAllProductController = require('./ProductController/GetAllProduct')
const getProductByIdController = require('./ProductController/GetProductById')
const deleteProductByIdController = require('./ProductController/DeleteProductById')
const addProductController = require('./ProductController/AddProduct')
const editProductByIdController = require('./ProductController/EditProductById')
const makeNewOrderController = require('./ProductController/MakeNewOrder')
const getProductByCategoryIDController = require('./ProductController/GetProductsByCategoryID')

const productApi = express.Router()

productApi.get('/', getAllProductController)
productApi.get('/:id', getProductByIdController)
productApi.delete('/:id', deleteProductByIdController)
productApi.post('/', addProductController)
productApi.put('/:id', editProductByIdController)
productApi.post('/order', makeNewOrderController)
productApi.get('/category/:categoryID', getProductByCategoryIDController)

module.exports = productApi
