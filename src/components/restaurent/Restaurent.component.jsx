import React, { Fragment,useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import Header from '../../components/common/Header.componet'
import axios from 'axios';



import ImageGallery from './ImageGallery/ImageGallery.compnent';
import {Overview,Contact} from './Contact-And-Overview/Overview-and-Contact.component'
import CarouselGallery from './Carousel/Carousel.component'
import AddAndRemoveItems from './AddAndRemove/AddAndRemove.component'
import PaymentSection from './PaymentSection/PaymentSection.component'




function Restaurent() {


  let getUserLoginData = () => {
    // read data from local storage
    let token = localStorage.getItem("batch64token");
    if (token == null) {
      return false;
    } else {
      // decode a jwt token =>
      try {
        let result = jwtDecode(token);
        return result;
      } catch (error) {
        // remove a token from localStorage
        // localStorage.removeItem("batch64token");
        return false;
      }
    }
  };

    

      let [user, setUser] = useState(getUserLoginData());


        // useParams
      let { id } = useParams();
      console.log(id)
    



      let initRestaurant = {
          aggregate_rating: "",
          city: "",
          city_id: 0,
          contact_number: "",
          cuisine: [],
          cuisine_id: [],
          image: "retaurent-background.png",
          locality: "",
          location_id: 0,
          mealtype_id: 0,
          min_price: 0,
          name: "",
          rating_text: "",
          thumb: [],
          _id: "",
      };
    

            // useState

      let [restDetailsToggle, setRestDetailsToggle] = useState(true);
      let [menuList, setMenuList] = useState([]);
      let [rDetails, setRDetails] = useState({ ...initRestaurant });
      let [totalPrice, setTotalPrice] = useState(0);
    


      let getRestaurantDetails = async () => {
        let url = "http://localhost:5003/api/get-restaurant-details-by-id/" + id;
        let { data } = await axios.get(url);
        if (data.status === true) {
          setRDetails({ ...data.restaurants });
        } else {
          setRDetails({ ...data.initRestaurant });
        }
      };
    

      let getMenuItems = async () => {
        let url = `http://localhost:5003/api/get-menu-items/${id}`;
        let { data } = await axios.get(url);
        console.log(data);
        if (data.status === true) {
          setMenuList([...data.menu_items]);
        } else {
          setMenuList([]);
        }
        setTotalPrice(0);
      };
    

      let addItem = (index) => {
        let _menuList = [...menuList]; // re-create array
        _menuList[index].qty += 1;
        setMenuList(_menuList);
    
        let newTotal = totalPrice + _menuList[index].price;
        setTotalPrice(newTotal);
      };
    
    
      let removeItem = (index) => {
        let _menuList = [...menuList];
        _menuList[index].qty -= 1;
        setMenuList(_menuList);
    
        let newTotal = totalPrice - _menuList[index].price;
        setTotalPrice(newTotal);
      };
    
    
      let makePayment = async () => {
        let userOrder = menuList.filter((menu) => menu.qty > 0);
    
        let url = "http://localhost:5003/api/gen-order-id";
        let { data } = await axios.post(url, { amount: totalPrice });
    
        if (data.status === false) {
          alert("Unable to gen order id");
          return false;
        }
        let { order } = data;
    
        var options = {
          key: "rzp_test_RB0WElnRLezVJ5", // Enter the Key ID generated from the Dashboard
          amount: order.amount, // rupee to paisa
          currency: order.currency,
          name: "Zomato Order",
          description: "Make payment for your orders",
          image:
            "https://www.freelogovectors.net/wp-content/uploads/2016/12/zomato-logo-785x785.png",
          order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: async function (response) {
            var verifyData = {
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
              name: user.name,
              mobile: 9999999999,
              email: user.email,
              order_list: userOrder,
              totalAmount: totalPrice,
            };
            let { data } = await axios.post(
              "http://localhost:5003/api/verify-payment",
              verifyData
            );
            if (data.status === true) {
              alert("payment completed successfully");
              window.location.assign("/");
            } else {
              alert("payment fails");
            }
          },
          prefill: {
            name: user.name,
            email: user.email,
            contact: "9999999999",
          },
        };
    
        var rzp1 = window.Razorpay(options);
        rzp1.open();
      };


    
      useEffect(() => {
        getRestaurantDetails();
      }, []); // once i.e on component load
    


    return(
        <Fragment>
          
            {/* makePayment */}
                  <PaymentSection user={user} makePayment={makePayment}/>
            {/* makePayment End */}



            {/* AddAndRemove_Menu_Items */}
                    <AddAndRemoveItems rDetails={rDetails} menuList={menuList} removeItem ={removeItem} addItem={addItem} totalPrice={totalPrice}/>
            {/* AddAndRemove_Menu_Items */}



            {/* ImageGallery */}
                     <CarouselGallery rDetails={rDetails}></CarouselGallery>
            {/* ImageGallery And End */}


            {/* Header */}
                  <div className="row justify-content-center">
                      <Header bg="bg-danger" />
                  </div>
            {/* Header  End */}


            <div className="row justify-content-center">
                  <div className="col-10">
                      <div className="row">

                            {/* ImageGallery */}
                                    <ImageGallery rDetails={rDetails}/>
                            {/* ImageGallery End */}
                        

                                    {/* Contact And  Overview Toggle */}
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
                                      {/* Contact And  Overview Toggle End */}

                                            {/* Button */}
                                                {user === true ? (
                                                      <button disabled className="btn btn-danger align-self-start">
                                                         Login to place order
                                                      </button>
                                                 ) : (
                                                      <a
                                                        className="btn btn-danger align-self-start"
                                                        data-bs-toggle="modal"
                                                        href="#modalMenuList"
                                                        role="button"
                                                        onClick={getMenuItems}
                                                      >
                                                          Show Menu List
                                                      </a>
                                                  )}
                                                  </div>
                                            {/* Button  End*/}

                                            {/* Contact And Overview */}
                                                  <hr className="mt-0" />
                                                      {restDetailsToggle === true ? (<Overview rDetails={rDetails} />) : (<Contact rDetails={rDetails}/>)}
                                            {/* Contact And Overview End */}

                                              </div>
                      </div>
                </div>
          </div>   
        </Fragment>
    )
}

export default Restaurent




