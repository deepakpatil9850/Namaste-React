import { useState } from "react";
import MenuItems from "./MenuItems";



const MenuCategory = ({data,onShow,isActive}) =>{
    const [activeState,setActiveState] = useState(true);

    return (
       <div>
            <div key={data?.title}  >
                <div className="bg-black text-white p-3 flex justify-between cursor-pointer" onClick={onShow}>
                        <h2 className="font-bold" >{data?.title} ({data?.itemCards.length})</h2>
                        <span>⬇️</span>
                </div>
                {
                  isActive && activeState && <MenuItems  itemCards={data?.itemCards}/>
                }
                </div>
       </div> 
        
    )

}

export default MenuCategory;