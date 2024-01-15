import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";


const Body = () =>{
    const [resList, setResList] = useState([]);

    useEffect(()=>{
        fetchData();
        },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const dataJson = await data.json();

        setResList(dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
        }
      
        const topRated = ()=>{
            const filterlist = resList.filter(res => res?.info?.avgRating >= 4.3)
            setResList(filterlist)    
        }

    return (resList.length ===0) ? ( <Shimmer />) : (
        <div className="res-container">

            <div>
                <input type="text" />
                <button>Search</button>
                <button onClick={topRated}>Top Rated</button>
            </div>
           
            <div className="product-list">
                {
                  resList.map((res)=>{ return  <Card key={ res?.info?.id} resData={res}/>
                  })
                }
            </div>      
        </div>
    )
}

export default Body;