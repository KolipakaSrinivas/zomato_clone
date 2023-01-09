import React, { Fragment } from 'react'


function ImageGallery ({rDetails}) {
    return(
        <Fragment>
            <div className="col-12 mt-5">
              <div className="restaurant-main-image position-relative">
                <img src={"/images/" + rDetails.image} alt="" className="" />
                <button
                  className="btn btn-outline-light position-absolute btn-gallery"
                  data-bs-toggle="modal"
                  data-bs-target="#modalGallery"
                >
                  Click To Get Image Gallery
                </button>
              </div>
            </div>
        </Fragment>
    )
}

export default ImageGallery