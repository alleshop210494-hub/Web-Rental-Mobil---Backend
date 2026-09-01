// src/models/booking.model.js
class BookingModel {
    constructor() {
      this.bookings = [];
    }
  
    create(bookingData) {
      const newBooking = {
        id: 'BOOK-' + Date.now(),
        ...bookingData,
        createdAt: new Date().toISOString()
      };
      this.bookings.push(newBooking);
      return newBooking;
    }
  
    findAll() {
      return this.bookings;
    }
  }
  
  module.exports = new BookingModel();