import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const MenuList = () =>{

    const [menues, setMenues] = useState([]);
    const {resId} = useParams();
    console.log(resId)
     useEffect(()=>{
         loadData()    
     },[])

    const loadData = async()=>{

        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.277693&lng=74.1843535&restaurantId="+resId);
        const jsonData = await data.json()
        setMenues(jsonData?.data)
        //.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    } 

   if(menues.length === 0) return <Shimmer /> ;

    const {itemCards} = menues?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    return (
        <div>
            <div>
                <div>
                    <h1>Menu</h1>
                    <h2>{menues?.cards[0]?.card?.card?.info?.name}</h2>
                    <ul>

                        {itemCards.map( (menu)=>
                            <li key={menu.card.info.id}>{menu.card.info.name}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuList;
