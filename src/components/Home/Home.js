import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Information from '../Information/Information';
import './Home.css';

const Home = () => {
    const [info,setInfo] = useState([]);


    useEffect(()=>{
        fetch('./info.JSON')
        .then(res => res.json())
        .then(data => setInfo(data));
    },[])
    const bookName = info.filter(book => book.course_id<4);
    return (
        <div >
            <h1 >Our Courses</h1>
            
           <div className="information-container">
               {
              
               
            bookName.map(inf=> <Information inf={inf}></Information>)
               }
           </div>
        </div>
    );
};

export default Home;