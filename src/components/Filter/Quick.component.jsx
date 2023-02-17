import React, { Fragment,useEffect,useState } from 'react'
import { useParams } from "react-router-dom";

import axios from 'axios';


import Header from '../common/Header.componet';
import SearchResult from './SearchResult/SearchResult.component'
import SearchFilter from './SearchFilter/SearchFilter.component'

function QuickSearch() {


    // const navigate = useNavigate();
    const { meal_id } = useParams();
    

    // useStae

    const [locationList, setLocationList] = useState([]);
    const [restaurantList, setRestaurantList] = useState([]);
    
    const [filterData, setFilterData] = useState({
        mealtype: meal_id,
      });
      
  

        // getLocationList function
    const getLocationList = async () => {
        const url = "http://localhost:5003/api/get-location-list";
        const { data } = await axios.get(url);
        setLocationList(data.location);
      };

    
    const filter = async () => {
        const url = "http://localhost:5003/api/filter";
        const { data } = await axios.post(url, filterData);
        if (data.status === true) {
          setRestaurantList(data.restaurants);
        } else {
          setRestaurantList([]);
        }
      };


      useEffect(() => {
        getLocationList();
      }, []); 

    


    const getFilterResult = (event,Type) => {
      
      let {value} = event.target
      let _filterObj = {}

      console.log(value,Type)
      
      switch(Type){

          //  sort
              case "sort":
                _filterObj['sort'] = value
              break;

             // location
              case "location":
                _filterObj["location"] = value
              break;

            // cost  for two
             case "costForTwo":
                let cost = value.split("-")
                _filterObj["l_cost"] = cost[0]
                _filterObj["h_cost"] = cost[1]
              break;

            case "cuisine":
              let checked = event.target.checked;
              // console.log(checked);

            let cuisine =
            filterData.cuisine == undefined ? [] : [...filterData.cuisine];
            if (checked) {
                let isAvailable = cuisine.includes(Number(value));
            if (isAvailable === false) cuisine.push(Number(value));
            } else {
              let position = cuisine.indexOf(Number(value));
              cuisine.splice(position, 1);
            }
            if (cuisine.length > 0) {
            _filterObj["cuisine"] = cuisine;
            }
            break;
      }

      setFilterData({...filterData,..._filterObj})
    }


    useEffect(()=>{

      filter()

    },[filterData])


    return(
        <Fragment>
           <Header bg="bg-danger" />
                <div className="row">
                     <div className="col-12 px-5 pt-4">
                    <p className="h3">Breakfast Places In Mumbai</p>
                </div>
                {/* <!-- food item --> */}
                    <div className="col-12 d-flex flex-wrap px-lg-5 px-md-5 pt-4">
                         <SearchFilter
                            locationList={locationList}
                            getFilterResult={getFilterResult}
                          />
                          <SearchResult 
                            restaurantList={restaurantList}
                            getFilterResult={getFilterResult}
                          />
                    </div>
                  </div>
        </Fragment>
    )
}

export default QuickSearch