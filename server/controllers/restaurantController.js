
const Restaurant = require('../models/Restaurant');

const getRestaurantsByFilters = async (req, res) => {
  console.log('request body is', req.body);
  try {
    const {name} = req.body;
    const newRestaurant = new Restaurant({
      name
   
    });

    await newRestaurant.save();
//     }
 } catch (error) {
res.json({ success: false, error: error.message });
  }
};

module.exports = { getRestaurantsByFilters };