import { useEffect,useState } from "react";
import { Resto_API } from "./loadData";

export default useRestroInfo = (link)=>{

    const [resList, setResList] = useState([]);

    const [filter, setFilter] = useState([]);

    useEffect(()=>{
        fetchData();
        },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const dataJson = await data.json();
        console.log(dataJson)
        setResList(dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
        setFilter(dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }

    return [resList,filter,setFilter,setResList]
}