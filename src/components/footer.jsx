import React from "react";
import "./home.css"
import fb from '../assets/fb.png';
import ig from '../assets/ig.png';

const Footer = () => {
    return(
    <section id="footer">
    <div className="footer-container">
        <p className="foot-text1">Wattle Sky Studio Pty Ltd</p>
        <div className="contact">
            <p> wattleskystudio@gmail.com</p>
            <p> +61 123 456 789</p>
        </div>
        <div className="social-media">
            <img src={fb} alt="facebook" className="fb"/>
            <img src={ig} alt="instagram" className="ig"/>
        </div>
    </div>
    </section>

   ) }
  
   export default Footer;