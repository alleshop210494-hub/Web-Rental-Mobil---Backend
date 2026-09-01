// src/models/car.model.js

class CarModel {
    constructor() {
      // Mock database sementara untuk area Pontianak
      this.cars = [
        {
          id: '1',
          name: 'Toyota Avanza',
          category: 'MPV',
          seats: 7,
          transmission: 'Manual / Automatic',
          pricePerDay: 350000,
          image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
          available: true,
          description: 'Mobil keluarga terlaris, irit, dan sangat nyaman untuk perjalanan dalam maupun luar kota Pontianak.'
        },
        {
          id: '2',
          name: 'Honda Brio',
          category: 'City Car',
          seats: 5,
          transmission: 'Automatic',
          pricePerDay: 300000,
          image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
          available: true,
          description: 'Lincah di perkotaan, konsumsi bahan bakar sangat hemat, cocok untuk anak muda atau perjalanan singkat.'
        },
        {
          id: '3',
          name: 'Toyota Innova Reborn',
          category: 'SUV / MPV',
          seats: 7,
          transmission: 'Automatic',
          pricePerDay: 650000,
          image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
          available: true,
          description: 'Kabin luas, suspensi empuk, pilihan utama untuk kenyamanan VIP dan perjalanan keluarga besar.'
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