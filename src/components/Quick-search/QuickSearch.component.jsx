import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'



import FilterOption from './Filter-option/Filter-option.component'
import RestaurantList from './Restaurant-List/Restaurant-list.component'

function QuickSearch() {


    const {meal_id} = useParams()


    const [locationList,setLocationList] =useState([])
    const [restaurantList,setRestaurantList] = useState([])
    const [filterData,setFilterData] = useState({mealtype: meal_id})




    const  getLocationList = async () =>{
        const url = 'http://localhost:5003/api/get-location-list'
        const {data} = await axios.get(url)
        setLocationList(data.location)

    }

    const filter = async () => {
        const url ='http://localhost:5003/api/filter' 
        let {data} = await axios.post(url,filterData)
        setRestaurantList(data.restaurants)
    }

    useEffect(()=>{
        getLocationList()
    },[])

    useEffect(()=>{
        filter()
    },[])

    return(
        <Fragment>
            <div className="row">
                <div className="col-12 px-5 pt-4">
                    <p className="h3">Breakfast Places In Mumbai</p>
                </div>
                <div className="col-12 d-flex flex-wrap px-lg-5 px-md-5 pt-4">
                    <FilterOption locationList={locationList}/>
                    <RestaurantList restaurantList={restaurantList}/>
                </div>
            </div>
        </Fragment>
    )
}

export default QuickSearch