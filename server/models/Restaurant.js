const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  name: String,
 address: String,
 cuisine:String,
//   contact: String,
// location:{type:String}
  rating: Number,
//   offers: Boolean,
//   cuisines: [String],
//   image: String,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;