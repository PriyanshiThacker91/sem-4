// const { Product } = require("../model/product");

// const getAllProducts = async (req, res) => {
//     const data = await Product.find();
//     res.send(data);
// };

// const getProductById = async (req, res) => {
//     const data = await Product.findById(req.params.id);
//     res.send(data);
// };

// const addProduct = async (req, res) => {
//     const data = await Product.create(req.body);
//     res.send(data);
// };

// const updateProduct = async (req, res) => {
//     const data = await Product.findByIdAndUpdate(req.params.id, req.body);
//     res.send(data);
// };

// const deleteProduct = async (req, res) => {
//     const data = await Product.findByIdAndDelete(req.params.id);
//     res.send(data);
// };

// module.exports = { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct };
// const { Product } = require("../model/product");

// const getAllProducts = async (req, res) => {
//     try {
//         const data = await Product.find();
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching products", error });
//     }
// };

// const getProductById = async (req, res) => {
//     try {
//         const data = await Product.findById(req.params.id);
//         if (!data) {
//             return res.status(404).json({ message: "Product not found" });
//         }
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching product", error });
//     }
// };

// const addProduct = async (req, res) => {
//     try {
//         const data = await Product.create(req.body);
//         res.status(201).json(data);
//     } catch (error) {
//         res.status(500).json({ message: "Error adding product", error });
//     }
// };

// const updateProduct = async (req, res) => {
//     try {
//         const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!data) {
//             return res.status(404).json({ message: "Product not found" });
//         }
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({ message: "Error updating product", error });
//     }
// };

// const deleteProduct = async (req, res) => {
//     try {
//         const data = await Product.findByIdAndDelete(req.params.id);
//         if (!data) {
//             return res.status(404).json({ message: "Product not found" });
//         }
//         res.status(200).json({ message: "Product deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting product", error });
//     }
// };

// module.exports = { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct };
