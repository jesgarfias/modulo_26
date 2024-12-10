import axios from "axios";
import { useEffect,useState } from "react";

const useAxios =(url)=>{
    const [data,setData]=useState([]);
    
    useEffect(()=>{
        axios.get(url).then(response=>{
            setData(response.data)
            console.log(response.data)
        }).catch(err=>{
            console.log(err)
        })
    },[url]);
    return {data};
}
export default useAxios;