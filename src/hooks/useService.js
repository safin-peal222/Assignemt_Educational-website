import { useEffect } from "react";
import { useState } from "react"

const useService = ()=>{
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('./info.JSON')
        .then(res => res.json())
        .then(data => setServices(data));
    },[]);

    return[services,setServices];
}

export default useService;