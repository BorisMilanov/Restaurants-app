
const Restaurant = require('../models/Restaurant');

const getRestaurantsByFilters = async (req, res) => {
  console.log('request body is', req.body);
  try {
    const {name,address,cuisine,rating} = req.body;
    const newRestaurant = new Restaurant({
      name,address,cuisine,rating
   
    });

    await newRestaurant.save();
//     }
 } catch (error) {
res.json({ success: false, error: error.message });
  }
};

module.exports = { getRestaurantsByFilters };