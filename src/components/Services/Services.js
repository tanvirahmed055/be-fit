import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    //state for rendering experts on the UI
    const [services, setServices] = useState([]);


    //fetch json data and setting it to a state
    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);




    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-9 col-sm-7 mb-5 ">
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