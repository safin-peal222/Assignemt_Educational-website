import React from 'react';
import './Information.css';

const Information = (props) => {
    const {inf} = props
    return (
        <div className="informat">
            <h1>{inf.course_name}</h1>
            <p>{inf.price}</p>
            <img className="book" src={inf.img} alt="" />
            

        </div>
    );
};

export default Information;