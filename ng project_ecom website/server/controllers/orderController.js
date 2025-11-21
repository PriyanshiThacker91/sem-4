// const Order = require('../model/order.js')
// const getAllOrders = async (req, res) => {
//     const data = await Order.find();
//     res.send(data);
// };


// const getOrderById = async (req, res) => {
//     const data = await Order.findById(req.params.id);
//     res.send(data);
// };

// const addOrder = async (req, res) => {
//     const data = await Order.create(req.body);
//     res.send(data);
// };


// const updateOrder = async (req, res) => {
//     const data = await Order.findByIdAndUpdate(req.params.id, req.body);
//     res.send(data);
// };


// const deleteOrder = async (req, res) => {
//     const data = await Order.findByIdAndDelete(req.params.id);
//     res.send(data);
// };

// module.exports = { getAllOrders, getOrderById, addOrder, updateOrder, deleteOrder };

const Order = require('../model/order.js');

const getAllOrders = async (req, res) => {
    try {
        const data = await Order.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching orders", error });
    }
};

const getOrderById = async (req, res) => {
    try {
        const data = await Order.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching order", error });
    }
};

const addOrder = async (req, res) => {
    try {
        const data = await Order.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error adding order", error });
    }
};

const updateOrder = async (req, res) => {
    try {
        const data = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error updating order", error });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const data = await Order.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting order", error });
    }
};

module.exports = { getAllOrders, getOrderById, addOrder, updateOrder, deleteOrder };
