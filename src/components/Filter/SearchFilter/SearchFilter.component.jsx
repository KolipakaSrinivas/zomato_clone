import React, { Fragment } from  'react'

import {SelectLocation,Cuisine,CostForTwo,Sort} from './AllFilters/AllFilters.component'




function SearchFilter({locationList,getFilterResult}) {
    return(
        <Fragment>
            <div className="food-shadow col-12 col-lg-3 col-md-4 me-5 p-3 mb-4">
                <div className="d-flex justify-content-between">
                    <p className="fw-bold m-0">Filter</p>
                         <button
                            className="d-lg-none d-md-none btn"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFilter"
                            aria-controls="collapseFilter"
                          >
                        <span className="fa fa-eye"></span>
                        </button>
                </div>
        {/* <!-- Collapse start  --> */}
                <div className="collapse show" id="collapseFilter">
                      <SelectLocation 
                      locationList={locationList}
                      getFilterResult={getFilterResult}
                      />
                   <p className="mt-4 mb-2 fw-bold">Cuisine</p>
                      <Cuisine 
                      locationList={locationList}
                      getFilterResult={getFilterResult}
                      />
                  <p className="mt-4 mb-2 fw-bold">Cost For Two</p>
                      <CostForTwo
                      getFilterResult={getFilterResult}
                      locationList={locationList}

                      />
                 <p className="mt-4 mb-2 fw-bold">Sort</p>  
                      <Sort
                      locationList={locationList}
                      getFilterResult={getFilterResult}
                      />
                </div>
            </div>
        </Fragment>
    )
}

export default SearchFilter