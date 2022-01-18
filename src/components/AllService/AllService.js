import React from 'react';
import { Button } from 'react-bootstrap';

const AllService = (props) => {
    const {course_id,img,course_name,supervisor} = props.service;
    return (
        <div className="informat">
            <p>{course_id}</p>
            <h1>{course_name}</h1>
            <h1>{supervisor}</h1>
            <img className="book" src={img} alt="" />
            <Button className="btn-danger">Buy Now</Button>
        </div>
    );
};

export default AllService;