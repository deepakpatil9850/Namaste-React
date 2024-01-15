import { useEffect, useState } from "react";
import Card from "./Card";
import restroData from "../utils/restroData";

const Body = () =>{


    const [resList, setResList] = useState(restroData);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const dataJson = await data.json();

        //Optional chaining
            //setResList(data?.cards?.gridElements?.infoWithStyle?.restaurents.info);
        setResList(dataJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) //cards[1].card.card.gridElements.infoWithStyle.restaurants);
        console.log(dataJson)
        }
      //[1].info;


    return (
        <div className="res-container">

            <div>
                <input type="text" />
                <button>Search</button>
            </div>

            <div className="product-list">
                 {
                  resList.map((res)=>{
                      return  <Card key={ res?.info?.id} resData={res}/>
                     
                  })
                }
                <Card></Card>
            </div>
        </div>
    )
}

export default Body;