import React, { Fragment } from 'react'


function Pagenation() {
    return(
        <Fragment>
            <div className="col-12 pagination d-flex justify-content-center">
                    <ul className="pages">
                        <li>&lt;</li>
                        <li className="active">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>&gt;</li>
                     </ul>
                </div>
        </Fragment>
    )
}

export default Pagenation