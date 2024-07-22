const express = require('express');
const router = express.Router();

const {
  getRestaurantsByFilters
} = require('../controllers/restaurantController');

router.post('/restaurants',getRestaurantsByFilters);

module.exports = router;