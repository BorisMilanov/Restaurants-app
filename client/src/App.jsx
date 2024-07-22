import { useState,useEffect } from 'react';
import Navbar from './Nav/Navbar'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Auth/Login';
import Home from './Nav/Home';
import Register from './Auth/Register';
import RestaurantForm from './Restaurant/RestaurantForm';
import RestaurantList from './Restaurant/ReastaurantList';
function App() {

  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/restaurants');
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  // const deleteRestaurant = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/api/restaurants/${id}`);
  //     fetchRestaurants();
  //   } catch (error) {
  //     console.error('Error deleting restaurant:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchRestaurants();
  // }, []);
  return (
    <><BrowserRouter><Navbar></Navbar><Routes>

      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/restaurantsform' element={<RestaurantForm fetchRestaurants={fetchRestaurants} />} />      
      {/* <Route path='/restaurants' element={<RestaurantForm  deleteRestaurant={deleteRestaurant}  />} />       */}
     



    </Routes></BrowserRouter>


    </>
  )
}

export default App
