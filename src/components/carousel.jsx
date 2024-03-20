import React from "react";
import "../components/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {slides} from "../data/carousel";
import {Link} from 'react-router-dom';

const CarouselPage = () => {
    const chunkedSlides = chunkArray(slides, 3); // Chunk slides into groups of three

    return (
        <div className="carousel-container">
            <Carousel
                showThumbs={false}
                showStatus={false}
                showIndicators={chunkedSlides.length > 1}
                infiniteLoop={true}
                autoPlay={true}
                interval={5000}
                stopOnHover={true}
                swipeable={true}
                dynamicHeight={false}
            >
                {chunkedSlides.map((group, idx) => (
                    <div key={idx} className="slider" >
                        {group.map((item, index) => {
                            let productLink = item.productLink; // Declare the variable outside of the JSX block
                            return(
                             <Link to={`/product-detail-pages/${productLink}`} key={productLink} className="link">
                          <div className="carousel-item">
                            <img key={index} src={item.src} alt={item.alt} />
                            <p className="name">{item.name}</p>
                            <p className="type">{item.type}</p>
                            <p className="price">{item.price}</p>
                            </div>
                            </Link>)
                        })}
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

// Function to chunk an array into groups
function chunkArray(array, size) {
    const chunkedArr = [];
    let index = 0;
    while (index < array.length) {
        chunkedArr.push(array.slice(index, size + index));
        index += size;
    }
    return chunkedArr;
}

export default CarouselPage;
