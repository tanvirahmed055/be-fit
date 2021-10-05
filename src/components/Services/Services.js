import React from 'react';
import Service from '../Service/Service';
import useServices from '../../hooks/useServices';
import './Services.css'

const Services = () => {
    const [services] = useServices();
    return (
        <div>
            <div className="container">
                <h1 className="mt-5 mb-3 text-primary fw-bolder service-title">All Premium Services</h1>
                <hr className="mb-5 services-horizontal-line text-warning" />
                <div className="row">
                    <div className="col-md-12 col-lg-12 col-sm-12 mb-5 ">
                        <div className="row services-container">
                            {
                                services.map(service => <Service key={service.name} service={service} ></Service>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;