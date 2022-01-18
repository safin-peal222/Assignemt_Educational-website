import React from 'react';


const Supervise = (props) => {
    const{name,img,inst} = props.supervise;
    console.log(props.supervise);
    return (
        <div className="informat">
            <h1>{name}</h1>
            <img src={img}alt="" />
            <h1>{inst}</h1>
        </div>
    );
};

export default Supervise;