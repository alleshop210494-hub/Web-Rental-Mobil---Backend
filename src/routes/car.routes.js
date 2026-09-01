// src/routes/car.routes.js
const express = require('express');
const router = express.Router();
const carController = require('../controllers/car.controller');

router.get('/', carController.getCars);
router.get('/:id', carController.getCarDetail);

module.exports = router;