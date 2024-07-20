
import Navbar from './Nav/Navbar'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Auth/Login';
import Home from './Nav/Home';
import Register from './Auth/Register';
function App() {


  return (
    <><BrowserRouter><Navbar></Navbar><Routes>

      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>




    </Routes></BrowserRouter>


    </>
  )
}

export default App
