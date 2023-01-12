import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";



function CarouselGallery({rDetails}) {
    return(
          <Carousel showThumbs={false} infiniteLoop={true}>
               {rDetails.thumb.map((value, index) => {
                return (
                  <div key={index} className="w-100">
                    <img src={"/images/" + value} />
                  </div>
                );
              })} 
              
          </Carousel>
    )
}

export default CarouselGallery