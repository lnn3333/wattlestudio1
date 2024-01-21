import React from "react";
import {Link} from 'react-router-dom';
import "./home.css"
import logo from '../assets/logo.png';
import headerleft1 from '../assets/header-left1.png';
import headerleft2 from '../assets/header-left2.png';
import headerleft3 from '../assets/header-left3.png';


const Header = () => {
    return(
    <nav id="nav-home">
    <div className="logo-components">
        <img src={logo} alt="Logo" className="logo"/>
        <p className="text1">WATTLE SKY</p>
        <p className="text2">STUDIO</p>
    </div>
    <ul className="nav-links">
        <li><Link to="/shop" className="links">Shop</Link></li>
        <li><Link to="/artist" className="links">Artist</Link></li>
        <li><Link to="/blog" className="links">Blog</Link></li>
        <li><Link to="/about" className="links">About us</Link></li>
        <li><Link to="/contact" className="links">Contact us</Link></li>

    </ul>
    <div className="header-left-container">
        <img src={headerleft1} alt='pic' className="header-left"></img>
        <img src={headerleft2} alt='pic' className="header-left"></img>
        <img src={headerleft3} alt='pic' className="header-left"></img>
    </div>  
    

    </nav>

   ) }
  
   export default Header;