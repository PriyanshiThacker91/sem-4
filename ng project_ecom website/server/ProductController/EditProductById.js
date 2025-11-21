const updateProduct = async (req, res) => {
    try {
        const data = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error updating product", error });
    }
};

module.exports =  updateProduct