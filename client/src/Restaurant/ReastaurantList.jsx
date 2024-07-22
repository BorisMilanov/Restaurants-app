// src/components/RestaurantList.js
import React from 'react';

const RestaurantList = ({ restaurants, deleteRestaurant }) => {
  return (
    <div>
      <h2>Restaurant List</h2>
      <ul>
        {restaurants.map((restaurant) => (
          <li key={restaurant._id}>
            <h3>{restaurant.name}</h3>
            <p>{restaurant.address}</p>
            <p>{restaurant.cuisine}</p>
            <p>Rating: {restaurant.rating}</p>
            <button onClick={() => deleteRestaurant(restaurant._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;
