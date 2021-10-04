import React from 'react';
import './Service.css'

const Service = (props) => {
    // object destructuring
    const { name, category, price, duration, img } = props.service || {};

    return (
        <div className="col-md-4 mb-5">
            <div className="single-service card h-100 shadow rounded p-3">
                <div>
                    <img src={img} className="card-img-top product-image" alt="..." />
                </div>
                <div className="card-body">
                    <h6 className="card-title fw-bolder text-center text-success">Name:&nbsp;<span className="fw-normal text-dark"> {name}</span></h6>
                    <p className="card-text text-center fw-bolder text-success">Catrgory:&nbsp;<span className="fw-normal text-dark">{category} </span></p>
                    <p className="card-text text-center fw-bolder text-success">Duration:&nbsp; <span className="fw-normal text-dark">{duration}</span></p>

                    <p className="fw-bold text-center fw-bolder text-success">Price:&nbsp;  <span className="fw-normal text-dark">${price}</span></p>
                </div>
                <div className="d-grid gap-2 col-9 mx-auto add-button">
                    <button className="btn btn-success" type="button"><i className="fas fa-user-plus"></i> &nbsp;Details</button>
                </div>
            </div>
        </div>
    );
};


export default Service;