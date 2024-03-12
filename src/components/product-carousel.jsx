import React from "react";
import "../components/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {productSlide} from "../data/carousel";

const ProductCarousel = () => {
    const chunkedSlides = chunkArray(productSlide, 3); // Chunk slides into groups of three

    return (
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
                <div key={idx} className="product-carousel-container" >
                    {group.map((item, index) => (
                        <div className="product-carousel">
                        <img key={index} src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </div>
            ))}
        </Carousel>
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

export default ProductCarousel;
