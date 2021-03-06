import React from 'react';
import useServices from '../../hooks/useServices';
import HomeService from '../HomeService/HomeService';
import './HomeServices.css'

const HomeServices = () => {
    const [services] = useServices();

    const firstFourServices = services.slice(0, 4);

    return (
        <div>
            <div className="container mt-5">
                <h4 className="text-danger">Choose Your Training</h4>
                <h1 className="text-dark fw-bolder">Popular Training</h1>
                <div className="row mt-5">
                    <div className="col-md-12 col-lg-12 col-sm-7 mb-5 ">
                        <div className="row services-container">
                            {
                                firstFourServices?.map(service => <HomeService key={service.name} service={service} ></HomeService>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeServices;