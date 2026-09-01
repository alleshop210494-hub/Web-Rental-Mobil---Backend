// src/services/booking.service.js
const bookingModel = require('../models/booking.model');
const carModel = require('../models/car.model');

class BookingService {
  createBooking(data) {
    const { carId, customerName, phone, startDate, endDate } = data;
    
    if (!carId || !customerName || !phone || !startDate || !endDate) {
      const error = new Error('Semua kolom data pemesanan wajib diisi');
      error.statusCode = 400;
      throw error;
    }

    const car = carModel.findById(carId);
    if (!car) {
      const error = new Error('Mobil yang dipilih tidak ditemukan');
      error.statusCode = 404;
      throw error;
    }

    const booking = bookingModel.create({
      carId,
      carName: car.name,
      pricePerDay: car.pricePerDay,
      customerName,
      phone,
      startDate,
      endDate
    });

    return booking;
  }
}

module.exports = new BookingService();