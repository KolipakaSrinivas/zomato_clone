import { Fragment } from "react"




function Paganation({getFilterResult}) {
    return(
        <Fragment>
             <div className="col-12 pagination d-flex justify-content-center">
                <ul className="pages">
                    <li>&lt;</li>
                    <li className="active">1</li>
                    <li value='1' onClick={(event)=>getFilterResult(event,"page")}>2</li>
                    <li value='2' onClick={(event)=>getFilterResult(event,"page")}>3</li>
                    <li value='3' onCkick={(event)=>getFilterResult(event,"page")}>4</li>
                    <li>&gt;</li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Paganation