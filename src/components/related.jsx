import React from "react";

// import Shop from "./shop"
// import Artist from "./artist"
// import Blog from "./blog"
// import About from "./about"
// import Contact from "./contact"
import "./home.css";
import circle from '../assets/circle.png';



const Related = () => {
    return(
        <section id="related">
                <div className="related-container">
                <div className="related-title">
                        <h1 className="related-text">RELATED PRODUCTS</h1>
                            <img src={circle} alt="circle" className="circleR"/>
                </div>
                <div className="related-item-container">
                    <div className="related-item">
                    <div className="product-related">
                            {/* <img  alt="product1" className="product1"></img> */}
                            <p className="name">KAONASHI / NOFACE</p>
                            <p className="type">Epoxy figure</p>
                            <p className="price">$100</p>
                    </div>
                    </div>
                    <div className="related-item">
                    <div className="product-related">
                            {/* <img  alt="product1" className="product1"></img> */}
                            <p className="name">KAONASHI / NOFACE</p>
                            <p className="type">Epoxy figure</p>
                            <p className="price">$100</p>
                    </div>
                    </div>
                    <div className="related-item">
                    <div className="product-related">
                            {/* <img  alt="product1" className="product1"></img> */}
                            <p className="name">KAONASHI / NOFACE</p>
                            <p className="type">Epoxy figure</p>
                            <p className="price">$100</p>
                    </div>
                    </div>
                    
                </div>
                </div>
            </section>
 )
};

export default Related;