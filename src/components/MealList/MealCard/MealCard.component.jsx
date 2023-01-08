import React, { Fragment } from 'react'


function MealCard ({list}) {

   const {image,content,name} = list
    
    return(
        <Fragment>
            <section className="px-0 d-flex border border-1 quick-search-item">
                <img
                    src={`images/${image}`}
                    alt=""
                    className='image-item'
                    />
                        <div className="pt-3 px-2">
                            <h4 className="text-navy">{name}</h4>
                            <p className="small text-muted">{content}</p>
                        </div>
            </section>
        </Fragment>
    )
}

export default MealCard