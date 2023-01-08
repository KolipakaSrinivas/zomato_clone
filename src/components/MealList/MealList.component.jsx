import React,{Fragment,useState,useEffect} from 'react';
import axios from 'axios';

import MealCard  from './MealCard/MealCard.component'


function MealList() {
    let [mealList,setMealList] = useState([])

    let getMenuListFromServer = async () => {
        const url = "http://localhost:5003/api/get-meal-types-list";
        let { data } = await axios.get(url)
        setMealList(data.meal_types)
        
    }   

    
    useEffect(()=>{
        getMenuListFromServer()
    },[])

    return(
        <Fragment>
            <section className="row justify-content-center">
                 <section className="col-10 mt-3">
                     <h3 className="fw-bold text-navy">Quick Searches</h3>
                     <p className="text-secondary">Discover restaurants by Searches</p>
                  </section>
                     <section className="col-10">
                         <section className="row py-2">
                              <section className="col-12 px-0 d-flex justify-content-between flex-wrap">
                                    {mealList.map(list=>(<MealCard list={list} key={list._id}/>))}
                             </section>
                         </section>
                     </section>
            </section>
        </Fragment>

    )
}

export default MealList