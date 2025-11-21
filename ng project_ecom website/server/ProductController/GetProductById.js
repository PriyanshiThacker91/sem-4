const getProductById = async (req, res) => {
    try {
        const data = await Product.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error });
    }
};
module.exports =  getProductById