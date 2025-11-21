const { Product } = require("../model/product");

const getAllProducts = async (req, res) => {
    try {
        const data = await Product.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error });
    }
};

module.exports=getAllProducts