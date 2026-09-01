// src/controllers/car.controller.js
const carService = require('../services/car.service');

class CarController {
  getCars(req, res, next) {
    try {
      const result = carService.getAllCars();
      res.status(200).json({
        success: true,
        message: 'Berhasil mengambil data katalog mobil',
        ...result
      });
    } catch (error) {
      next(error);
    }
  }

  getCarDetail(req, res, next) {
    try {
      const { id } = req.params;
      const car = carService.getCarById(id);
      res.status(200).json({
        success: true,
        message: 'Berhasil mengambil detail mobil',
        data: car
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new CarController();