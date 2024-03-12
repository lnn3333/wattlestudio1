import React from "react";
import "./home.css";
import circle from '../assets/circle.png';
import CarouselPage from "./carousel";
import {slides} from "../data/carousel";


const Related = () => {
      

    return (
        <section id="related">
            <div className="related-container">
                <div className="related-title">
                    <h1 className="related-text">RELATED PRODUCTS</h1>
                    <img src={circle} alt="circle" className="circleR" />
                </div>
                <div className="related-item-container">
                         <CarouselPage data = {slides}/>
                </div>
            </div>
        </section>
    );
};

export default Related;
