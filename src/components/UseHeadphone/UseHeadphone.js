import { useEffect, useState } from "react";

const useHeadphone =()=>{
    const [headphones,setHeadphone] =useState([]);
    useEffect(()=>{
        fetch("fakedb.json")
        .then(res => res.json())
        .then(data => setHeadphone(data))
    },[])
    return [headphones,setHeadphone]
}
export default useHeadphone;