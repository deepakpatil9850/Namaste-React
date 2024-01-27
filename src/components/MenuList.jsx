import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useLoadData from "../utils/useLoadData";
import { MENU_API } from "../utils/loadData";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const MenuList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeState, setActiveState] = useState(true);
  const { resId } = useParams();
  const menues = useLoadData(MENU_API + resId);

  if (menues === null) return <Shimmer />;

  const cards = menues?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const menuCategories = cards?.cards?.filter(
    (card) =>
      card?.card?.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  //console.log(menuCategories)
  return (
    <div className=" bg-green-100 text-center">
      <div className="w-6/12 mx-auto border-2 border-black">
        <div className="p-3">
          <h1 className="m-2 font-bold text-xl">
            {menues?.cards[0]?.card?.card?.info?.name}
          </h1>
        </div>
        {
          // Accordion
          menuCategories.map((item, index) => (
            <MenuCategory
              key={item?.card?.card?.title}
              data={item?.card?.card}
              isActive={activeIndex === index}
              onShow={() => setActiveIndex(index)}
            />
          ))
        }
      </div>
    </div>
  );
};

export default MenuList;
