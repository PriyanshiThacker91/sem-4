// const mongoose = require('mongoose');

// const paymentSchema = new mongoose.Schema({
//     orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     paymentMethod: { type: String, enum: ['COD', 'Online'], required: true },
//     paymentStatus: { type: String, enum: ['Pending', 'Completed', 'Failed'], default: 'Pending' },
//     createdAt: { type: Date, default: Date.now }
//   });

//   module.exports.Payment = mongoose.model('Payment', paymentSchema);