import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'






import {Overview,Contact} from './Overview-Contact/Overview-Contact.component'

function Restaurant() {

    const {id} = useParams()

    const [rDetails,setRDetails] = useState([])
    const [restDetailsToggle,setRestDetailsToggle] = useState(true)
    // // const [menuList,setMenuList] = useState([])


    const getRestaurantDetails = async  ()=> {
        const url = `http://localhost:5003/api/get-restaurant-details-by-id/${id}`
        const {data} = await axios.get(url)
        setRDetails(data.restaurants)
      }

      console.log(rDetails)

    // const getMenuItems =async ()=> {
    //     const url = `http://localhost:5003/api/get-menu-items/${id}`
    //     const {data} = axios.get(url)
    //     setMenuList(data.menu_items)
    //   }

    // const makePayment = async () => {

    //     let userOrder = menuList.filter((menu) => menu.qty > 0);
    //     const url = "http://localhost:5003/api/gen-order-id";
    //     const { data } = await axios.post(url, { amount: totalPrice });

    //      if (data.status === false) {
    //          alert("Unable to gen order id");
    //         return false;
    //      }
    //     let { order } = data;

    //     var options = {
    //             key: "rzp_test_RB0WElnRLezVJ5", // Enter the Key ID generated from the Dashboard
    //             amount: order.amount, // rupee to paisa
    //             currency: order.currency,
    //             name: "Zomato Order",
    //             description: "Make payment for your orders",
    //             image:
    //                     "https://www.freelogovectors.net/wp-content/uploads/2016/12/zomato-logo-785x785.png",
    //             order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    //     handler: async function (response) {
    //         var verifyData = {
    //                 payment_id: response.razorpay_payment_id,
    //                 order_id: response.razorpay_order_id,
    //                 signature: response.razorpay_signature,
    //                 // name: user.name,
    //                 mobile: 9999999999,
    //                 // email: user.email,
    //                 order_list: userOrder,
    //                 totalAmount: totalPrice,
    //                 };
    //         const { data } = await axios.post("http://localhost:5003/api/verify-payment",verifyData);
    //             if (data.status === true) {
    //                 alert("payment completed successfully");
    //                     window.location.assign("/");
    //             } else {
    //                 alert("payment fails");
    //             }
    //         },
    //          prefill: {
    //                     name: user.name,
    //                     email: user.email,
    //                     contact: "9999999999",
    //                 },
    //     };

    //     var rzp1 = window.Razorpay(options);
    //             rzp1.open();
    //         }

    useEffect(()=>{
        getRestaurantDetails()
    },[])




    return(
        <Fragment>
          <div className="row justify-content-center">
        <div className="col-10">
          <div className="row">
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
            <div className="col-12">
              <h3 className="mt-4">{rDetails.name}</h3>
              <div className="d-flex justify-content-between">
                <ul className="list-unstyled d-flex gap-3">
                  <li
                    className="fw-bold"
                    onClick={() => setRestDetailsToggle(true)}
                  >
                    Overview
                  </li>
                  <li
                    className="fw-bold"
                    onClick={() => setRestDetailsToggle(false)}
                  >
                    Contact
                  </li>
                </ul>
                  {/* <button disabled className="btn btn-danger align-self-start">
                    Login to place order
                  </button> */}

                  <a
                    className="btn btn-danger align-self-start"
                    data-bs-toggle="modal"
                    href="#modalMenuList"
                    role="button"
                    // onClick={getMenuItems}
                  >
                    Show Menu List
                  </a>

              </div>
              <hr className="mt-0" />
                {
                  restDetailsToggle === true ?
                  <Overview rDetails={rDetails}/>:<Contact rDetails={rDetails}/>
                }
            </div>
          </div>
        </div>
      </div> 
        </Fragment>
    )
}

export default Restaurant