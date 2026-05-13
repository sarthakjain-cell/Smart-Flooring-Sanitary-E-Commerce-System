import Booking from '../models/Booking.js';

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
export const createBooking = async (req, res) => {
  const { product, date, address, squareFeet, totalCalculatedCost } = req.body;

  const booking = new Booking({
    user: req.user._id,
    product,
    date,
    address,
    squareFeet,
    totalCalculatedCost,
  });

  const createdBooking = await booking.save();
  res.status(201).json(createdBooking);
};

// @desc    Get all bookings for admin
// @route   GET /api/bookings
// @access  Private/Admin
export const getBookings = async (req, res) => {
  const bookings = await Booking.find({}).populate('user', 'id name email').populate('product', 'title');
  res.json(bookings);
};

// @desc    Get user's bookings
// @route   GET /api/bookings/mybookings
// @access  Private
export const getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate('product', 'title');
  res.json(bookings);
};
