import React from "react";

import "./Banner.css";

const Banner = () => {
    return (

        <div className="banner-container ">

            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <div className="col-md-6">
                        <h1 className="title  ms-5">
                            THE BEST FITNESS TRAINING <br /> YOU WILL EVER FIND
                        </h1>
                        <p className="text-white text-center mt-3 ms-5">
                            We have made people's fitness dream come true. We have premium fitness courses for you.
                        </p>
                        <button className="mt-3 general-btn ">Join Now!</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;