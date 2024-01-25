import { useState } from "react"

const MenuItems = ({itemCards}) => {



  return (   
            <div >
              {
                itemCards.map(item => 
                  <div key={item?.card?.info?.id} className='bg-slate-50 shadow-md my-2' >
                    {item?.card?.info?.name}
                  </div>
                  )
              }
            </div>
  )
}

export default MenuItems
