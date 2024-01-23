import React, { useState } from 'react'
function MenuItems(props) {
  const [state, setState] = useState(false);

  return (  state &&
      
    <div >
      {
        props.list.itemCards.map(item => 
          <div key={item?.card?.info?.id} className='bg-slate-50 shadow-md my-2' >
            {item?.card?.info?.name}
          </div>
          )
      }
    </div>
  )
}

export default MenuItems
