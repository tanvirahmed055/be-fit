import { useEffect } from "react";
import { useState } from "react"

const useServices = () => {
    //state for rendering services on the UI
    const [services, setServices] = useState([]);


    //fetch json data and setting it to a state
    useEffect(() => {
        fetch('./servicesData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services];
}

export default useServices;