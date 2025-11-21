// const { Category } = require("../model/category");


// const getAllCategories = async (req, res) => {
//     const data = await Category.find();
//     res.send(data);
// };

// const getCategoryById = async (req, res) => {
//     const data = await Category.findById(req.params.id);
//     res.send(data);
// };


// const addCategory = async (req, res) => {
//     const data = await Category.create(req.body);
//     res.send(data);
// };

// const updateCategory = async (req, res) => {
//     const data = await Category.findByIdAndUpdate(req.params.id, req.body);
//     res.send(data);
// };

// const deleteCategory = async (req, res) => {
//     const data = await Category.findByIdAndDelete(req.params.id);
//     res.send(data);
// };

// module.exports = { getAllCategories, getCategoryById, addCategory, updateCategory, deleteCategory };

// const { Category } = require("../model/category");

// const getAllCategories = async (req, res) => {
//     try {
//         const data = await Category.find();
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching categories", error });
//     }
// };

// const getCategoryById = async (req, res) => {
//     try {
//         const data = await Category.findById(req.params.id);
//         if (!data) {
//             return res.status(404).json({ message: "Category not found" });
//         }
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching category", error });
//     }
// };

// const addCategory = async (req, res) => {
//     try {
//         const data = await Category.create(req.body);
//         res.status(201).json(data);
//     } catch (error) {
//         res.status(500).json({ message: "Error adding category", error });
//     }
// };

// const updateCategory = async (req, res) => {
//     try {
//         const data = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!data) {
//             return res.status(404).json({ message: "Category not found" });
//         }
//         res.status(200).json(data);
//     } catch (error) {
//         res.status(500).json({ message: "Error updating category", error });
//     }
// };

// const deleteCategory = async (req, res) => {
//     try {
//         const data = await Category.findByIdAndDelete(req.params.id);
//         if (!data) {
//             return res.status(404).json({ message: "Category not found" });
//         }
//         res.status(200).json({ message: "Category deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting category", error });
//     }
// };

// module.exports = { getAllCategories, getCategoryById, addCategory, updateCategory, deleteCategory };
