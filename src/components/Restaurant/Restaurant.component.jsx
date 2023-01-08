import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'


function Restaurant() {

    const {id} = useParams()

    const [rDetails,setRDetails] = useState([])


    const getRestaurantDetails = async  ()=> {
        const url = `http://localhost:5003/api/get-restaurant-details-by-id/${id}`
        const {data} = await axios.get(url)
        setRDetails(data.restaurants)
    }

    useEffect(()=>{
        getRestaurantDetails()
    },[])




    return(
        <Fragment>
        <div
        className="modal fade"
        id="modalUserDetails"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                name
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter full Name"
                //   value={user.name}
                  onChange={() => {}}
                  disabled
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                //   value={user.email}
                  onChange={() => {}}
                  disabled
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Address
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  value="Nashik"
                  onChange={() => {}}
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-danger"
                data-bs-target="#modalMenuList"
                data-bs-toggle="modal"
              >
                Back
              </button>
              <button className="btn btn-success" /*onClick={makePayment}*/div>
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
        </Fragment>
    )
}

export default Restaurant