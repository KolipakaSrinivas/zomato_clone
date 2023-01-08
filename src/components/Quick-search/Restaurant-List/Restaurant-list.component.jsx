import React, { Fragment } from 'react'






import RestaurantCard from './RestaurantCard/Restaurant-Card.component'
import Pagenation from './pagenation/Pagenation.component'
    


function RestaurantList(props) {
    const {restaurantList} = props

    return(
        <Fragment>
            <div className="col-12 col-lg-8 col-md-7">
              {
                restaurantList.map(restaurantList=>(
                     <RestaurantCard restaurantList={restaurantList} key={restaurantList._id}/>
                ))
              } 
                <Pagenation/>        
            </div>
        </Fragment>
    )
}

export default RestaurantList