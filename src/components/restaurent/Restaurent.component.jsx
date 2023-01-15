import React, { Fragment,useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';






import ImageGallery from './ImageGallery/ImageGallery.compnent';



function Restaurent() {


    // useParams
    let { id } = useParams();
    // console.log(id)

    // useStae

    let [rDetails, setRDetails] = useState([]);
    let [restDetailsToggle, setRestDetailsToggle] = useState(true);
    const [user,setUser] = useState(true)


    // function

    let getRestaurantDetails = async () => {
        let url = "http://localhost:5003/api/get-restaurant-details-by-id/" + id;
        let { data } = await axios.get(url);
        // if (data.status === true) {
        //   setRDetails({ ...data.restaurants });
        // } else {
        //   setRDetails({ ...data.initRestaurant });
        // }
            setRDetails(data.restaurants)

      };

    //   useEffect

    useEffect(()=>{
        getRestaurantDetails()

    },[])

    console.log(rDetails)





    return(
        <Fragment>
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
                                                {user === false ? (
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

                                            cuisine




        {/* { restDetailsToggle  === true ? (<div className="over-view">
                                        <p className="h5 mb-4">About this place</p>
                                        <p className="mb-0 fw-bold">Cuisine</p>
                                        <p>{rDetails.cuisine.reduce((pValue, cValue) => {
                                                let value = "";
                                            if (pValue === "") {
                                                value = cValue.name;
                                            } else {
                                                value = `${pValue}, ${cValue.name}`;
                                            }
                                            return value;
                                        }, "")}
                                            </p>
                                            <p className="mb-0 fw-bold">Average Cost</p>
                                            <p>₹ {rDetails.min_price} for two people (approx.)</p>
                                    </div>) :




                                    (<div className="over-view">
                                        <p className="mb-0 fw-bold">Phone Number</p>
                                        <p>+{rDetails.contact_number}</p>
                                        <p className="mb-0 fw-bold">Address</p>
                                        <p>{rDetails.locality}, {rDetails.city}</p>
                                    </div>) }


 */}
















                    </div>
                </div>
            </div>
        </div>   
        </Fragment>
    )
}

export default Restaurent

