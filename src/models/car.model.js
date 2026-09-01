// src/models/car.model.js
class CarModel {
    constructor() {
      this.cars = [
        {
          id: '1',
          name: 'Toyota Avanza',
          category: 'MPV',
          pricePerDay: 350000,
          seats: 7,
          transmission: 'Manual',
          image: '/images/avanza.jpg', // Ubah path ini dengan nama file gambar Anda di folder public/images/ atau URL langsung
          description: 'Mobil keluarga terfavorit, irit bahan bakar, dan sangat nyaman untuk perjalanan dalam maupun luar kota Pontianak.'
        },
        {
          id: '2',
          name: 'Honda Brio',
          category: 'City Car',
          pricePerDay: 300000,
          seats: 5,
          transmission: 'Automatic',
          image: '/images/brio.jpg', // Ubah path ini dengan nama file gambar Anda di folder public/images/ atau URL langsung
          description: 'Lincah di perkotaan, mudah diparkir, serta hemat bahan bakar untuk mobilitas harian di Pontianak.'
        },
        {
          id: '3',
          name: 'Toyota Innova Reborn',
          category: 'MPV Premium',
          pricePerDay: 600000,
          seats: 7,
          transmission: 'Automatic',
          image: '/images/innova.jpg', // Ubah path ini dengan nama file gambar Anda di folder public/images/ atau URL langsung
          description: 'Kenyamanan kelas atas untuk perjalanan bisnis maupun liburan keluarga besar dengan kabin yang sangat luas.'
        }
      ];
    }
  
    findAll() {
      return this.cars;
    }
  
    findById(id) {
      return this.cars.find(car => car.id === id);
    }
  }
  
  module.exports = new CarModel();