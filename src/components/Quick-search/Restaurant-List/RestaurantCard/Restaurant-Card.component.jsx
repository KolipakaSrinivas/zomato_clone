import React, { Fragment } from 'react'
import {useNavigate} from 'react-router-dom'

function RestaurantCard({restaurantList}) {

    const navigate = useNavigate()
    return(
        <Fragment>
            <div
            onClick={() => navigate("/restaurant/" + restaurantList._id)}
            className="col-12 food-shadow p-4 mb-4"
            key={restaurantList._id}
            >
                <div className="d-flex align-items-center">
                        <img
                        src={"/images/" + restaurantList.image}
                        className="food-item"
                        alt=''/>

                      <div className="ms-5">
                             <p className="h4 fw-bold">{restaurantList.name}</p>
                             <span className="fw-bold text-muted">FORT</span>
                            <p className="m-0 text-muted"><i className="fa fa-map-marker fa-2x text-danger"aria-hidden="true"></i>{restaurantList.locality}{restaurantList.city}</p>
                     </div>
              </div>
              <hr />
              <div className="d-flex">
                     <div>
                         <p className="m-0">CUISINES:</p>
                         <p className="m-0">COST FOR TWO:</p>
                    </div>
                    <div className="ms-5">
                        <p className="m-0 fw-bold">
                        {restaurantList.cuisine.reduce((pValue, cValue) => {
                             let value;
                        if (pValue == "") {
                            value = cValue.name;
                         } else {
                             value = pValue + ", " + cValue.name;
                            }
                      return value;
                            }, "")}

                        </p>
                        <p className="m-0 fw-bold"><i className="fa fa-inr" aria-hidden="true"></i>restaurantList.min_price</p>
                    </div>
              </div>
            </div>        
        </Fragment>
    )
}

export default RestaurantCard

