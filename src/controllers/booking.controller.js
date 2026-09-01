// src/controllers/booking.controller.js
const bookingService = require('../services/booking.service');

class BookingController {
  create(req, res, next) {
    try {
      const booking = bookingService.createBooking(req.body);
      res.status(201).json({
        success: true,
        message: 'Pemesanan berhasil dibuat. Silakan selesaikan konfirmasi.',
        data: booking
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new BookingController();