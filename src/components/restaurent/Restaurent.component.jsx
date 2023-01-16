import React, { Fragment,useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";





import ImageGallery from './ImageGallery/ImageGallery.compnent';
import {Overview,Contact} from './Contact-And-Overview/Overview-and-Contact.component'
import CarouselGallery from './Carousel/Carousel.component'
// import PaymentSection from './AddAndRemove/AddAndRemove.component'
// import AddAndRemoveItems from './AddAndRemove/AddAndRemove.component'



function Restaurent() {


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


    // useParams
    let { id } = useParams();
    // console.log(id)





    // function

    let getRestaurantDetails = async () => {
        let url = "http://localhost:5003/api/get-restaurant-details-by-id/" + id;
        let { data } = await axios.get(url);
        if (data.status === true) {
          setRDetails({ ...data.restaurants });
        } else {
          setRDetails({ ...data.initRestaurant });
        }
      };


    const  getUserLoginData = () => {
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
                    localStorage.removeItem("batch64token");
                    return false;
                }
            }
    }


    const getMenuItems = async () => {
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


   
    
    





       // useStae
       let [rDetails, setRDetails] = useState({...initRestaurant});
       let [restDetailsToggle, setRestDetailsToggle] = useState(true);
       // const [user,setUser] = useState(true)
       let [user, setUser] = useState(getUserLoginData());
       const [menuList, setMenuList] = useState([]);
       let [totalPrice, setTotalPrice] = useState(0);



       const addItem = (index) => {
        let _menuList = [..._menuList]; // re-create array
            _menuList[index].qty += 1;
            _menuList(_menuList);

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



    
    //   useEffect

    useEffect(()=>{
        getRestaurantDetails()

    },[])

    console.log(rDetails)





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
                                <h5 className="modal-title" id="exampleModalToggleLabel2">name</h5>
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
                            value={user.name}
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
                            value={user.email}
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
                            <button className="btn btn-success" >
                                 Pay Now
                            </button>
                    </div>
                </div>
                </div>
            </div>





          

                {/* <AddAndRemoveItems rDetails={rDetails} menuList={menuList} removeItem ={removeItem} addItem={addItem}/> */}


                <div
          className="modal fade"
          id="modalMenuList"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
      >
          <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalToggleLabel">{rDetails.name}</h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>        
                </div>
                <div className="modal-body ">
                    {menuList.map((menu, index)=>{

                      return   <div className="row p-2" key={menu._id}>

                                     <div className="col-8">
                                          <p className="mb-1 h6">{menu.name}</p>
                                          <p className="mb-1">{menu.price}</p>
                                          <p className="small text-muted">{menu.description}</p>
                                      </div>
                                      
                                      <div className="col-4 d-flex justify-content-end">
                                          <img src={"/images/" + menu.image} alt="" />

                                              {menu.qty === 0 ? (  <button
                                                                    className="btn btn-primary btn-sm add"
                                                                    onClick={() => addItem(index)}
                                                                >
                                                                        Add
                                                                    </button> ) :

                                                                 ( <div className="order-item-count section ">
                                                                       <span
                                                                          className="hand"
                                                                          onClick={() => removeItem(index)}
                                                                        >
                                                                            -
                                                                        </span>
                                                                        <span>{menu.qty}</span>
                                                                        <span
                                                                          className="hand"
                                                                          onClick={() => addItem(index)}
                                                                        >
                                                                                  +
                                                                        </span>

                                                                      </div>  )}

                                      </div>
                                </div>
                      })}
                </div>
              </div>
          </div>
      </div>
























                    {/* <PaymentSection/> */}


                        {/* ImageGallery */}

              <CarouselGallery rDetails={rDetails}></CarouselGallery>

                        {/* ImageGallery And End */}









            <div className="row justify-content-center">
                <div className="col-10">
                    <div className="row">


                            {/* ImageGallery */}

                        <ImageGallery rDetails={rDetails}/>

                            {/* ImageGallery End */}
                        
                        
                        
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

