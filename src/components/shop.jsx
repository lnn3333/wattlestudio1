import React from "react";
import Header from "./header";
import Footer from "./footer";
import Related from "./related";
// import productlist from '../assets/product.png';
import {Link} from 'react-router-dom';
import {slides} from "../data/carousel";

//import { Link, Routes, Route, useNavigate } from 'react-router-dom';
//import SelectComponent from "./SelectComponent";
import "./home.css";


const Shop = () => {
    return(
        <React.Fragment>
            <Header />
            <div className="shop-container">
                <section id="product-container">
                    <div className="dir">Shop</div>
                    <table id="product-list">
                        <tr className="product-row">
                        <th className="product">
                       
                        {slides.slice(0, 3).map(s => {
                        let productLink = s.productLink; // Declare the variable outside of the JSX block
                        return (
                            <Link to={`/product-detail-pages/${productLink}`} key={productLink} className="link">
                                <div className="productListing-item">
                                    <img src={s.src} alt={s.alt} />
                                    <p className="productListing-name">{s.name}</p>
                                    <p className="productListing-type">{s.type}</p>
                                    <p className="productListing-price">{s.price}</p>
                                </div>
                            </Link>
                        );
                        })}
                        </th>
                        <th className="product">
                        {slides.slice(3,6).map(s => {
                        let productLink = s.productLink; // Declare the variable outside of the JSX block
                        return ( 
                            <Link to={`/product-detail-pages/${productLink}`} key={productLink} className="link">
                                <div className="productListing-item">
                                    <img src={s.src} alt={s.alt} />
                                    <p className="productListing-name">{s.name}</p>
                                    <p className="productListing-type">{s.type}</p>
                                    <p className="productListing-price">{s.price}</p>
                                </div>
                            </Link>
                        );
                        })}

                        </th>
                        </tr>
                    
                      
                    </table>

                    
                </section>

                <section id="side">
                    <div className="search-container">
                        <div className="search"> Search</div>
                    </div>
                    <div className="category-container">
                        <div className="category-title">Category</div>
                        <div className="category">Category</div>
                        <div className="category">Category</div>
                        <div className="category">Category</div>
                        <div className="category">Category</div>
                    </div>
                    <div className="ig-container">
                        <div className="ig-title">Instagram</div>
                        <div className="ig-box"></div>
                    </div>

                </section>
            </div>

            <Related />
            <Footer />
        </React.Fragment>
           
            
    )
  };
  
  export default Shop;