// src/components/RestaurantForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RestaurantForm = ({ fetchRestaurants }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/restaurants', {
        name,
        address,
         cuisine,
        rating,
      });
      alert('Restaurant added successfully');
      fetchRestaurants();
    } catch (error) {
      console.error('Error adding restaurant:', error);
      alert('Error adding restaurant');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Cuisine:</label>
        <input
          type="text"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <button type="submit">Add Restaurant</button>
    </form>
  );
};

export default RestaurantForm;
