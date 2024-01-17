import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () =>{
    
    const [resList, setResList] = useState([]);

    const [filter, setFilter] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
        },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.277693&lng=74.1843535&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const dataJson = await data.json();

        setResList(dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
        setFilter(dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
      
        const topRated = ()=>{
            const filterlist = resList.filter(res => res?.info?.avgRating >= 4.3)
            setFilter(filterlist)    
        }

        const searchFeature = () =>{
            const filterlist = resList.filter(res => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilter(filterlist) 
        }

    return (filter.length ===0) ? ( <Shimmer />) : (
        <div className="res-container">
            <div>
                <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button onClick={searchFeature}>Search</button>
                <button onClick={topRated}>Top Rated</button>
            </div>
           
            <div className="product-list">
                {
                  filter.map((res)=>{
                     return (
                        <Link key={res?.info?.id} to={"restroMenu/"+res?.info?.id}>
                             <Card  resData={res}/>
                        </Link> 
                        )
                        } 
                  )   
                }
            </div>      
        </div>
    )
}

export default Body;