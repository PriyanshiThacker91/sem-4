const { Category } = require("../model/category");

const getAllCategories = async (req, res) => {
    try {
        const data = await Category.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching categories", error });
    }
};
module.exports=getAllCategories