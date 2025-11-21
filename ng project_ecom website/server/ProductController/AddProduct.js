const addProduct = async (req, res) => {
    try {
        const data = await Product.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error adding product", error });
    }
};

module.exports =  addProduct