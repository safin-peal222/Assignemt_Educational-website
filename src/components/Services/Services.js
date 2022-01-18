import React from 'react';
import useService from '../../hooks/useService';
import AllService from '../AllService/AllService';


const Services = () => {
    const [services] = useService();
    return (
        <div className="information-container">
            {
                services.map(service =><AllService service={service}></AllService>)
            }
        </div>
    );
};

export default Services;