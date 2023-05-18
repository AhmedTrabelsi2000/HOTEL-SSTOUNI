import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slider.css"

function Slider() {
    return (
        <Carousel>
            <div>slider 1</div>
            <div>slider 1</div>
            <div>slider 1</div>
        </Carousel>
    )
}

export default Slider
