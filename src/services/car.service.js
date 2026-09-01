// src/services/car.service.js
const carModel = require('../models/car.model');

class CarService {
  getAllCars() {
    const cars = carModel.findAll();
    return {
      total: cars.length,
      data: cars
    };
  }

  getCarById(id) {
    const car = carModel.findById(id);
    if (!car) {
      const error = new Error('Mobil tidak ditemukan');
      error.statusCode = 404;
      throw error;
    }
    return car;
  }
}

module.exports = new CarService();