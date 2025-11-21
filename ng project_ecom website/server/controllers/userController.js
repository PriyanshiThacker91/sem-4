// const { User } = require("../model/user");

// const getAllUsers = async (req, res) => {
//     const data = await User.find();
//     res.send(data);
// }
// const getById = async (req, res) => {
//     const data = await User.findById(req.params.id);
//     res.send(data);
// }

// const postusers = async (req, res) => {
//     const data = await User.create(req.body);
//     res.send(data);
// }

// const updateusers = async (req, res) => {
//     const data = await User.findByIdAndUpdate(req.params.id, req.body);
//     res.send(data);
// }
// const deleteusers = async (req, res) => {
//     const data = await User.findByIdAndDelete(req.params.id);
//     res.send(data);
// }

// module.exports = { getAllUsers, getById, postusers, updateusers, deleteusers }

const { User } = require("../model/user");

const getAllUsers = async (req, res) => {
    try {
        const data = await User.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
};

const getById = async (req, res) => {
    try {
        const data = await User.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error });
    }
};

const postUsers = async (req, res) => {
    try {
        const data = await User.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
};

const updateUsers = async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
};

const deleteUsers = async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
};

module.exports = { getAllUsers, getById, postUsers, updateUsers, deleteUsers };
