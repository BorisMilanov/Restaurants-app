
import Navbar from './Nav/Navbar'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Auth/Login';
import Home from './Nav/Home';
function App() {


  return (
    <><BrowserRouter><Navbar></Navbar><Routes>

      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Home/>}/>




    </Routes></BrowserRouter>


    </>
  )
}

export default App
