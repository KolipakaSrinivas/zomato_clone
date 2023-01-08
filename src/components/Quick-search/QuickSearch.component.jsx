import React, { Fragment } from 'react'


import FilterOption from './Filter-option/Filter-option.component'
import RestaurantList from './Restaurant-List/Restaurant-list.component'

function QuickSearch() {
    return(
        <Fragment>
            <FilterOption/>
            <RestaurantList/>

        </Fragment>
    )
}

export default QuickSearch