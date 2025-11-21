const mongoose = require("mongoose");
const { Product } = require("../../model/product");

const getProductByCategoryIDController = async (req, res) => {
    try {
        const { categoryID } = req.params;

        if (!categoryID || categoryID === "null" || !mongoose.Types.ObjectId.isValid(categoryID)) {
            return res.json(await Product.find().populate('categoryID').exec());
        }

        const products = await Product.find({ categoryID }).populate('categoryID').exec();

        return res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = getProductByCategoryIDController;
