import mongoose from 'mongoose';

const bookingSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, // Optional, can just be generic service
    date: { type: Date, required: true },
    address: { type: String, required: true },
    squareFeet: { type: Number, required: true },
    totalCalculatedCost: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'], default: 'Pending' },
  },
  { timestamps: true }
);

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
