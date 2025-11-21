// const { wishlist } = require("../model/wishlist");

// const getAllwishlist = async (req, res) => {
//     const data = await wishlist.find();
//     res.send(data);
// }
// const getByIdwishlist = async (req, res) => {
//     const data = await wishlist.findById(req.params.id);
//     res.send(data);
// }

// const postwishlist = async (req, res) => {
//     const data = await wishlist.create(req.body);
//     res.send(data);
// }

// const updatewishlist = async (req, res) => {
//     const data = await wishlist.findByIdAndUpdate(req.params.id, req.body);
//     res.send(data);
// }
// const deletewishlist = async (req, res) => {
//     const data = await wishlist.findByIdAndDelete(req.params.id);
//     res.send(data);
// }

// module.exports = { getAllwishlist, getByIdwishlist, postwishlist, updatewishlist, deletewishlist }

const { wishlist } = require("../model/wishlist");

const getAllWishlist = async (req, res) => {
    try {
        const data = await wishlist.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching wishlist", error });
    }
};

const getByIdWishlist = async (req, res) => {
    try {
        const data = await wishlist.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Wishlist item not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching wishlist item", error });
    }
};

const postWishlist = async (req, res) => {
    try {
        const data = await wishlist.create(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error adding to wishlist", error });
    }
};

const updateWishlist = async (req, res) => {
    try {
        const data = await wishlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) {
            return res.status(404).json({ message: "Wishlist item not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Error updating wishlist item", error });
    }
};

const deleteWishlist = async (req, res) => {
    try {
        const data = await wishlist.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Wishlist item not found" });
        }
        res.status(200).json({ message: "Wishlist item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting wishlist item", error });
    }
};

module.exports = { getAllWishlist, getByIdWishlist, postWishlist, updateWishlist, deleteWishlist };
