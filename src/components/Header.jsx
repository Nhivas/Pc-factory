import React from 'react'
import '../styles/header.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
        <div className="header">
            <div className="logo">
                <img src="data:image/jpeg;base64,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" alt="logo" />
            </div>
            <div className="menu">
                    <a href="#home">Home</a>
                    <a href="#build">Build PC</a>
                    <a href="#prebuilt">Pre-Built</a>
                    <a href="#contact">Contact</a>
            </div>
            <div className="btn">
              <span></span>
            <button><Link to="/">Login</Link></button>
            <button><Link to="/signup">Signup</Link></button>
            </div>
        </div>
    </>
  )
}
export default Header;

