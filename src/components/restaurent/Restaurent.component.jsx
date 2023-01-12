import React,{Fragment,useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


import {Overview,Contact} from './OverviewAndContact/OverviewAndContact.component'
import ImageGallery from './ImageGallery/ImageGallery.compnent'
// import CarouselGallery from './Carousel/Carousel.component'




function Restaurent() {


  // useParams
  const { id } = useParams()



  /// useState
  let [restDetailsToggle, setRestDetailsToggle] = useState(true);
  let [rDetails, setRDetails] = useState([]);


  let getRestaurantDetails = async () => {
    let url = `http://localhost:5003/api/get-restaurant-details-by-id/${id}`;
    let { data } = await axios.get(url);
    // if (data.status === true) {
    //   setRDetails({ ...data.restaurants });
    // } else {
    //   setRDetails({ ...data.initRestaurant });
    // }
    setRDetails(data.restaurants)
    console.log(rDetails)
  };

 


    
  //  useEffect

    useEffect(()=>{
        getRestaurantDetails()
    },[])


    return(
        <Fragment>








      {/* <div
          className="modal fade"
          id="modalGallery"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
      >
        <div className="modal-dialog modal-lg " style={{ height: "75vh" }}>
          <div className="modal-content">
              <div className="modal-body h-75">
                <CarouselGallery rDetails={rDetails}/>
              </div>
          </div>
        </div>
      </div> */}

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



        <div className="row justify-content-center">
            <div className="col-10">
                <div className="row">
                  <ImageGallery rDetails={rDetails}/>    
                      <div className="col-12">
                          <h3 className="mt-4">{rDetails.name}</h3>
                            <div className="d-flex justify-content-between">
                              <ul className="list-unstyled d-flex gap-3">
                                  <li
                                    onClick={() => setRestDetailsToggle(true)}
                                    className="fw-bold"
                                  >
                                     Overview
                                  </li> 
                                  <li
                                    onClick={() => setRestDetailsToggle(false)}
                                    className="fw-bold"
                                  >
                                   Contact
                                  </li>
                              </ul>

                              {true  ? (
                                   <button disabled className="btn btn-danger align-self-start">
                                      Login to place order
                                    </button>
                                  ) : (
                                  <a
                                    className="btn btn-danger align-self-start"
                                    data-bs-toggle="modal"
                                    href="#modalMenuList"
                                    role="button"
                                    // onClick={getMenuItems}
                                  >
                                   Show Menu List
                                  </a>
                                 )}                              
                       </div>
                           <hr className="mt-0" />
                             {restDetailsToggle  == true ? <Overview rDetails={rDetails} />:<Contact rDetails={rDetails}/> }
                    </div>
                </div>  
           </div>
        </div>            


      </Fragment>

    )
}

export default Restaurent



