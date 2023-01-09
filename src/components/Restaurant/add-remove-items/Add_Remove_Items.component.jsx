import React from 'react'



function AddRemoveItem() {
    return(
        <div
        className="modal fade"
        id="modalMenuList"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                {rDetails.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              {menuList.map((menu, index) => {
                return (
                  <div className="row p-2" key={menu._id}>
                    <div className="col-8">
                      <p className="mb-1 h6">{menu.name}</p>
                      <p className="mb-1">{menu.price}</p>
                      <p className="small text-muted">{menu.description}</p>
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      <div className="menu-food-item">
                        <img src={"/images/" + menu.image} alt="" />

                        {menu.qty === 0 ? (
                          <button
                            className="btn btn-primary btn-sm add"
                            onClick={() => addItem(index)}
                          >
                            Add
                          </button>
                        ) : (
                          <div className="order-item-count section ">
                            <span
                              className="hand"
                              onClick={() => removeItem(index)}
                            >
                              -
                            </span>
                            <span>{menu.qty}</span>
                            <span
                              className="hand"
                              onClick={() => addItem(index)}
                            >
                              +
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                    <hr className=" p-0 my-2" />
                  </div>
                );
              })}

              {/* <div className="row p-2">
                <div className="col-8">
                  <p className="mb-1 h6">Gobi Manchurian</p>
                  <p className="mb-1">89</p>
                  <p className="small text-muted">
                    Deep-fried cauliflower florets tossed in pungent spices to
                    form a flavorsome dry curry
                  </p>
                </div>
                <div className="col-4 d-flex justify-content-end">
                  <div className="menu-food-item">
                    <img src="/images/" alt="" />

                    <div className="order-item-count section ">
                      <span className="hand">-</span>
                      <span>0</span>
                      <span className="hand">+</span>
                    </div>
                  </div>
                </div>
                <hr className=" p-0 my-2" />
              </div> */}

              <div className="d-flex justify-content-between">
                <h3>Total {totalPrice}</h3>
                <button
                  className="btn btn-danger"
                  data-bs-target="#modalUserDetails"
                  data-bs-toggle="modal"
                >
                  Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AddRemoveItem