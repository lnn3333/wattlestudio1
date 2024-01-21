import React from "react";
import Header from "./header";
import Footer from "./footer";
import Related from "./related";
import productlist from '../assets/product.png';

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
                            <img scr={productlist} alt="product1" className="product1" ></img>
                            <p className="name">KAONASHI / NOFACE</p>
                            <p className="type">Epoxy figure</p>
                            <p className="price">$100</p>
                        </th>
                        <th className="product">
                            <img scr={productlist} alt="product1" className="product1"></img>
                            <p className="name">KAONASHI / NOFACE</p>
                            <p className="type">Epoxy figure</p>
                            <p className="price">$100</p>
                        </th>
                        </tr>
                        <tr>
                        <th className="product">
                            <img scr={productlist} alt="product1" className="product1"></img>
                            <p className="name">KAONASHI / NOFACE</p>
                            <p className="type">Epoxy figure</p>
                            <p className="price">$100</p>
                        </th>
                        <th className="product">
                            <img scr={productlist} alt="product1" className="product1"></img>
                            <p className="name">KAONASHI / NOFACE</p>
                            <p className="type">Epoxy figure</p>
                            <p className="price">$100</p>
                        </th>
                        </tr>
                        <tr>
                        <th className="product">
                            <img  alt="product1" className="product1"></img>
                            <p className="name">KAONASHI / NOFACE</p>
                            <p className="type">Epoxy figure</p>
                            <p className="price">$100</p>
                        </th>
                        <th className="product">
                            <img  alt="product1" className="product1"></img>
                            <p className="name">KAONASHI / NOFACE</p>
                            <p className="type">Epoxy figure</p>
                            <p className="price">$100</p>
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