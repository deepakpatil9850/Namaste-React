import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestroInfo from "../utils/useRestroInfo";


const Body = () =>{
    const [searchText, setSearchText] = useState("");
    const [resList, filter, setFilter] = useRestroInfo()    

        const topRated = ()=>{
            const filterlist = resList.filter(res => res?.info?.avgRating >= 4.3)
            setFilter(filterlist)
        }

        const searchFeature = () =>{
            const filterlist = resList.filter(res => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilter(filterlist)
        }
           
    return ( resList == undefined || resList.length === 0 ) ? ( <Shimmer />) : (
        <div className="res-container">
            <div>
                <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button onClick={searchFeature}>Search</button>
                <button onClick={topRated}>Top Rated</button>
            </div>
           
            <div className="flex flex-wrap">
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