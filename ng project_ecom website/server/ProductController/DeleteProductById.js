const deleteProduct = async (req, res) => {
    try {
        const data = await Product.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error });
    }
};

module.exports =  deleteProduct