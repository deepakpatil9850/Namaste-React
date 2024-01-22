import { useEffect,useState } from "react";

const useLoadData = (link) =>{

    const [menues, setMenues] = useState(null);
    
   
     useEffect(()=>{
         loadData()    
     },[])

    const loadData = async()=>{

        const data = await fetch(link);
        const jsonData = await data.json()
        setMenues(jsonData?.data)
        //.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    } 
 
    return menues;

}

export default useLoadData;