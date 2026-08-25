import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  paymentMethod: { type: String, default: 'COD' },
  payment: { type: Boolean, default: false },
  status: { type: String, default: 'Order Placed' },
  date: { type: Number, default: Date.now },
});

const orderModel = mongoose.models.Order || mongoose.model('Order', orderSchema);

export default orderModel;
