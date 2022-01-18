import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Supervise from '../Supervise/Supervise';

const About = () => {
    const [supervisor,setSupervisor] = useState([]);
    useEffect(()=>{
       fetch('./supervisor2.JSON')
       .then(res=>res.json())
       .then(data =>setSupervisor(data));
    },[])
    return (
        <div className="information-container">

            {
                supervisor.map(supervise=><Supervise supervise={supervise}></Supervise>)
            }
            
        </div>
    );
};

export default About;