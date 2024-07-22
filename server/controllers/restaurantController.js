
const Restaurant = require('../models/Restaurant');

const createRestaurant = async (req, res) => {
  console.log('request body is', req.body);
  try {
    const { name, address, cuisine, rating } = req.body;
    const newRestaurant = new Restaurant({
      name, address, cuisine, rating
    });

    await newRestaurant.save();

  } catch (error) {
    res.json({ success: false, error: error.message });
  }
};
const allRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurants', error: error.message });
  }
};
module.exports = { createRestaurant,allRestaurants };