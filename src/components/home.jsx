import React from "react";
import Footer from './footer';
import Header from './header';
// import Shop from "./shop"
// import Artist from "./artist"
// import Blog from "./blog"
// import About from "./about"
// import Contact from "./contact"
import "./home.css";
import circle from '../assets/circle.png';
import Carousel from "./carousel";
import {slides} from "../data/carousel";




const Home = () => {
    return(
       
        <React.Fragment>
            <Header />
            <section id="art-menu">
            <div className="art-item">
                    <p className="art-title">Title</p>
                    <p className="art-des">Description</p>
                    <button className="art-button">Shop Now</button>
                </div>
            </section>

            <section id="punch">
                <div className="punch-container">
                    <div className="punch-title">
                    <h1 className="punch-text">PUNCH NEEDLE COLLECTION</h1>
                        <img src={circle} alt="circle" className="circle"/>
                    </div>
                
                <div className="punch-box"></div>
                </div>
            </section>

            <section id="epoxy">
                <div className="epoxy-container">
                <div className="epoxy-title">
                        <h1 className="epoxy-text">EPOXY ART COLLECTION</h1>
                            <img src={circle} alt="circle" className="circle2"/>
                </div>
                <div className="item-container">
                    <Carousel data = {slides}/>
                </div>
                </div>
            </section>
            <section id="meet">
                <div className="meet-container">
                <div className="meet-title">
                        <h1 className="meet-text">MEET THE ARTIST</h1>
                            <img src={circle} alt="circle" className="circle"/>
                </div>
              
                <div className="meet-item-container">
                    <div className="meet-item">
                    <img src={circle} alt="circle" className="circle3"/>
                    </div>
                </div>
                </div>
            </section>
            <Footer />
        </React.Fragment>
    )
  };
  
  export default Home;