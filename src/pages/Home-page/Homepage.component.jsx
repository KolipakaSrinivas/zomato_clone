import React,{Fragment} from 'react';



import MainHeader from '../../components/MainHeader/MainHeader.component'
import MealList from '../../components/MealList/MealList.component'


function Home() {
    return(
        <Fragment>
            <MainHeader/>
            <MealList/>
         
        </Fragment>

    )
}

export default Home