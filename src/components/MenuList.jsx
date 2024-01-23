import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useLoadData from "../utils/useLoadData";
import { MENU_API } from "../utils/loadData";
import MenuItems from "./MenuItems";


const MenuList = () =>{

    
    const {resId} = useParams();    
    const menues = useLoadData(MENU_API + resId);
    const [accordinState, setAccordinState] = useState(false)

    if(menues === null) return <Shimmer /> ;
    
    const cards = menues?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    const lists = cards?.cards?.filter(card => card?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    return (
        <div  className=" bg-green-100 text-center">
            <div className="w-6/12 mx-auto border-2 border-black">
                <div className="p-3">
                    <h1 className="m-2 font-bold text-xl">{menues?.cards[0]?.card?.card?.info?.name}</h1>
                    <ul>
                       {   
                            lists.map((list)=> 
                                <div key={list?.card?.card?.title} >
                                    <div onClick={ () => setAccordinState(!accordinState)} className="cursor-pointer">
                                        <div className="bg-black text-white p-3 flex justify-between">
                                            <h2 className="font-bold" >{list?.card?.card?.title} ({list.card.card.itemCards.length})</h2>
                                            <span>⬇️</span>
                                        </div>
                                            
                                             <MenuItems list={list?.card?.card} setAccor ={setAccordinState} />     
                                            
                                    </div>
                                </div>
                            )
                       }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenuList;
