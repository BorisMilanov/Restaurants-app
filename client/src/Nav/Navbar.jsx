import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const token = localStorage.getItem("token");

    return (

        <div className="Navbar">
            <span className="nav-logo">DevLHB</span>
            <div className={`nav-items ${isOpen && "open"}`}>
              
       
                {!token && <Link to="/register">Register</Link>}
                {!token && <Link to="/login">Login</Link>}
                {token && <Link to="/home">Home</Link>}
                 
               
            </div>
            <div
                className={`nav-toggle ${isOpen && "open"}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                    {!token && <Link to="/register">Register</Link>}
                {!token && <Link to="/login">Login</Link>}
                 
               
                <div className="bar"></div>
            </div>
        </div>
    );
};

export default Navbar;