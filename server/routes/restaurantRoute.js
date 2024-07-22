const express = require('express');
const router = express.Router();

const {
  getRestaurantsByFilters
} = require('../controllers/restaurantController');

router.post('/res',getRestaurantsByFilters);

module.exports = router;