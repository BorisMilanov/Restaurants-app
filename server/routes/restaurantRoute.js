const express = require('express');
const router = express.Router();
const {createRestaurant,allRestaurants} = require('../controllers/restaurantController')

router.post('/restaurants',createRestaurant);
router.get('/restaurants',allRestaurants)

module.exports = router;