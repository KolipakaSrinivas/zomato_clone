import React from 'react'



const  Overview  = ({rDetails}) => {
    return(
            <div className="over-view">
                <p className="h5 mb-4">About this place</p>
                <p className="mb-0 fw-bold">Cuisine</p>
                <p>
                    {rDetails.cuisine.reduce((pValue, cValue) => {
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
            </div>
    )
}





const Contact = ({rDetails}) => {
    return(
        <div className="over-view">
             <p className="mb-0 fw-bold">Phone Number</p>
             <p>+{rDetails.contact_number}</p>
            <p className="mb-0 fw-bold">Address</p>
            <p>
                {rDetails.locality}, {rDetails.city}
            </p>
        </div>
    )
}








export {Overview,Contact}


