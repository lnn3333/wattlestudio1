import React from "react";
import "../components/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {slides} from "../data/carousel";

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
                dynamicHeight={true}
            >
                {chunkedSlides.map((group, idx) => (
                    <div key={idx} className="slider" >
                        {group.map((item, index) => (
                            <div className="carousel-item">
                            <img key={index} src={item.src} alt={item.alt} />
                            </div>
                        ))}
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
