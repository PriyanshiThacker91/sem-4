const { Category } = require("../model/category");

const getCategoryById = async (req, res) => {
    try {
        const data = await Category.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching category", error });
    }
};

module.exports=getCategoryById