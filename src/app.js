// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

// Import Routes
const carRoutes = require('./routes/car.routes');

const app = express();

// Middleware Keamanan & Parser
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Endpoint untuk Cek Kesehatan Server
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API Rental Mobil Pontianak Berjalan dengan Aman dan Optimal',
    timestamp: new Date().toISOString()
  });
});

// API Routes Mounting
app.use('/api/cars', carRoutes);

// Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Terjadi kesalahan pada internal server'
  });
});

module.exports = app;