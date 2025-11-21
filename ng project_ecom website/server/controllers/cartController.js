// const { Cart } = require("../model/cart");

// const getAllCarts = async (req, res) => {
//     const data = await Cart.find();
//     res.send(data);
// };

// const getCartById = async (req, res) => {
//     const data = await Cart.findById(req.params.id);
//     res.send(data);
// };

// const addCart = async (req, res) => {
//     const data = await Cart.create(req.body);
//     res.send(data);
// };

// const updateCart = async (req, res) => {
//     const data = await Cart.findByIdAndUpdate(req.params.id, req.body);
//     res.send(data);
// };

// const deleteCart = async (req, res) => {
//     const data = await Cart.findByIdAndDelete(req.params.id);
//     res.send(data);
// };

// module.exports = { getAllCarts, getCartById, addCart, updateCart, deleteCart };

const { Cart } = require("../model/cart");

const getAllCarts = async (req, res) => {
    try {
        const data = await Cart.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching carts", error });
    }
};

const getCartById = async (req, res) => {
    try {
        const data = await Cart.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching cart", error });
    }
};

const addCart = async (req, res) => {
    try {
        const data = await Cart.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error adding to cart", error });
    }
};

const updateCart = async (req, res) => {
    try {
        const data = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error updating cart", error });
    }
};

const deleteCart = async (req, res) => {
    try {
        const data = await Cart.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Cart not found" });
        }
        res.status(200).json({ message: "Cart deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting cart", error });
    }
};

module.exports = { getAllCarts, getCartById, addCart, updateCart, deleteCart };
