const { Category } = require("../model/category");

const addCategory = async (req, res) => {
    try {
        const data = await Category.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error adding category", error });
    }
};

module.exports=addCategory