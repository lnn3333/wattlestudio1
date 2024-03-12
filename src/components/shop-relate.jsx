import React from "react";
import Header from "./header";
import Footer from "./footer";
import Related from "./related";
import circle from '../assets/circle.png';
import main from '../assets/main.png';
import ProductCarousel from "./product-carousel";
import { productSlide } from "../data/carousel";
// import side1 from '../assets/side1.png';
// import side2 from '../assets/side2.png';
// import side3 from '../assets/side3.png';
import star from '../assets/star.png';
//import { Link, Routes, Route, useNavigate } from 'react-router-dom';
//import SelectComponent from "./SelectComponent";
import "./home.css";


const ShopRelate = () => {
    return(
        
        <React.Fragment>
            <Header />
            <div className="shop-container">
                <section id="pic">
                <img src={main} alt="product1" className="main-pic"></img>
                {/* <img  src={side1} alt="product2" className="side-pic"></img>
                <img src={side2} alt="product2" className="side-pic"></img>
                <img  src={side3}alt="product2" className="side-pic"></img> */}
                <ProductCarousel data = {productSlide}/>
                </section>

                <section id="description">
                    <div className="product-detail">
                        
                        <div className="relate-name-container">
                            <h1 className="relate-text">KAONASHI / NOFACE</h1>
                                <img src={circle} alt="circle" className="circle5"/>
                        </div>
                        <div className="product-price">$100</div>
                        <div className="product-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                        <div className="add-cart">
                            <button className="quantity">1</button>
                            <button className="add">Add to cart</button>
                        </div>
                    <div className="detail-container">
                        <div className="detail-title">SKU: TTKAOB</div>
                        <div className="detail-box">
                            <p className="detail1">Material</p>
                            <p className="detail2">Dimension</p>
                            <p className="detail3">Tag</p>
                        </div>
                    </div>
                    </div>

                </section>
            </div>
            <section id="customer-info">
                    <div className="info-header">
                        <div className="header-info-container">
                        <p className="info-header-item">Description</p>
                        <div className="line"></div>
                        </div>
                        <div className="header-info-container">
                        <p className="info-header-item">Additional Information</p>
                        <div className="line"></div>
                        </div>
                        <div className="header-info-container">
                        <p className="info-header-item">Review(0)</p>
                        <div className="line"></div>
                        </div>

                    </div>
                    
                    <div className="info-body">
                        <p className="review-des"> There are no review ...</p>
                        <p className="review-des"> Be the first to review “Graphics”</p>
                        <p className="review-des">   Your email address will not be published. Required fields are marked *</p>
                        <p className="rating"> Your rating *</p>
                        <div className="star">
                        <img  src={star}alt="star" className="star1"></img>
                        <img  src={star}alt="star" className="star1"></img>
                        <img  src={star}alt="star" className="star1"></img>
                        <img  src={star}alt="star" className="star1"></img>
                        <img  src={star}alt="star" className="star1"></img>
                        </div>
                        <p className="review"> Your review</p>
                        <textarea name="review-text" id="review-text" cols="170" rows="18"></textarea>
                    </div>
                </section>

                <section id="log-in">
                    <div className="log-in-item">
                        <p className="log-in-title">Name *:</p>
                        <textarea name="log-in-text" id="c-text" cols="170" rows="3"></textarea>
                    </div>
                    <div className="log-in-item">
                        <p className="log-in-title">Email *:</p>
                        <textarea name="log-in-text" id="c-text" cols="170" rows="3"></textarea>
                    </div>
                    <button className="summit">Summit</button>
                </section>

            <Related />
            <Footer />
        </React.Fragment>
           
            
    )
  };
  
  export default ShopRelate;