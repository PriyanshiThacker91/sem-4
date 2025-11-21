const { Category } = require("../model/category");

const updateCategory = async (req, res) => {
    try {
        const data = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ message: "Category not found" });
         }
        res.status(200).json(data);
     } catch (error) {
    }
 };

 module.exports= updateCategory