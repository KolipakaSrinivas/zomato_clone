import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";




function CarouselGallery(props) {

  const {rDetails} = props
  console.log(props)
    return(
         <div
            className="modal fade"
            id="modalGallery"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg " style={{ height: "75vh" }}>
                <div className="modal-content">
                  <div className="modal-body h-75">
                      <Carousel showThumbs={false} infiniteLoop={true}>
                          {rDetails.thumb.map((value, index) => { 
                            return (
                              <div key={index} className="w-100">
                              <img src={"/images/" + value} />
                              </div>
                          );
                        })}
                        </Carousel>                
                  </div>
                </div>
            </div>
        </div>

    )
}

export default CarouselGallery