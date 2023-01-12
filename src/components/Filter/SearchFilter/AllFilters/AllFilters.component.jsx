import React from 'react';



const SelectLocation = ({locationList,getFilterResult}) => (
            <div>
                <label htmlFor="" className="form-label"
                >
                        Select Location
                </label>
                    <select className="form-select form-select-sm"
                    onChange={event=>getFilterResult(event,"location")}    
                    
                    >
                        <option value="">Select</option>
                            {locationList.map((location, index) => {
                                return (
                                        <option key={index} value={location.location_id}>
                                        {location.name}, {location.city}
                                        </option>
                                    );
                            })}
                    </select>
            </div>
)






const Cuisine = ({getFilterResult}) => {

    return(
    <div>
    <div className="ms-1">
        <input 
            type="checkbox"
            className="form-check-input"
            name='cuisine'
            onChange={event=>getFilterResult(event,"cuisine")}    
            value='1'
         />
             <label htmlFor="" className="form-check-label ms-1">
                    North Indian
             </label>
    </div>
    <div className="ms-1">
        <input 
            type="checkbox" 
            className="form-check-input"
            name='cuisine'
            value='2'
            onChange={(event)=>getFilterResult(event,"cuisine")}
            />
            <label htmlFor="" className="form-check-label ms-1">
            South Indian
            </label>
    </div>
    <div className="ms-1">
        <input 
            type="checkbox" 
            className="form-check-input" 
            name='cuisine'
            value='3'
            onChange={(event)=>getFilterResult(event,"cuisine")}
            />
            <label htmlFor="" className="form-check-label ms-1">
            Chinese
            </label>
        </div>
    <div className="ms-1">
        <input 
            type="checkbox" 
            className="form-check-input"
            name='cuisine'
            value='4'
            onChange={(event)=>getFilterResult(event,"cuisine")}
            />
            <label htmlFor="" className="form-check-label ms-1">
            Fast Food
        </label>
    </div>
  </div>
    )
} 



const CostForTwo = ({getFilterResult}) => {

    return(
                    <div>
                       <div className="ms-1">
                             <input
                                type="radio"
                                className="form-check-input"
                                name="cost"
                                value="0-500"
                                onChange={(event) => {
                                getFilterResult(event, "costForTwo");
                            }}
                        />
                            <label htmlFor="" className="form-check-label ms-1">
                                less then 500
                            </label>
                        </div>
                            <div className="ms-1">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    name="cost"
                                    value="500-1000"
                                    onChange={(event) => {
                                    getFilterResult(event, "costForTwo");
                                }}
                        />
                            <label htmlFor="" className="form-check-label ms-1">
                                    500 to 1000
                            </label>
                            </div>
                    <div className="ms-1">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="cost"
                            value="1000-1500"
                            onChange={(event) => {
                            getFilterResult(event, "costForTwo");
                        }}
                        />
                        <label htmlFor="" className="form-check-label ms-1">
                            1000 to 1500
                        </label>
                        </div>
                    <div className="ms-1">
                         <input
                            type="radio"
                            className="form-check-input"
                            name="cost"
                            value="1500-2000"
                            onChange={(event) => {
                            getFilterResult(event, "costForTwo");
                      }}
                    />
                        <label htmlFor="" className="form-check-label ms-1">
                            1500 to 2000
                         </label>
                    </div>
                    <div className="ms-1">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="cost"
                            value="2000-9999999"
                            onChange={(event) => {
                             getFilterResult(event, "costForTwo");
                            }}
                        />
                        <label htmlFor="" className="form-check-label ms-1">
                            2000+
                        </label>
                    </div>
                </div>
    )
}



const Sort = ({getFilterResult}) => {
    return(
        <div>
                    <div className="ms-1">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="sort"
                          value="1"
                          onChange={(event) => {
                     getFilterResult(event, "sort");
                    }}
                />
                    <label htmlFor="" className="form-check-label ms-1">
                        Price low to high
                    </label>
                </div>
            <div className="ms-1">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="sort"
                        value="-1"
                        onChange={(event) => {
                        getFilterResult(event, "sort");
                        }}
                        />
                    <label htmlFor="" className="form-check-label ms-1">
                         Price high to low
                    </label>
            </div>
        </div>
    )
}


export {SelectLocation,Cuisine,CostForTwo,Sort}