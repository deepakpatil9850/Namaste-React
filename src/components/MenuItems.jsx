import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const MenuItems = ({ itemCards, removeBtn }) => {
  const dispatch = useDispatch();
  const handAddClick = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveClick = (index) => {
    dispatch(removeItem(index));
  };

  return (
    <div>
      {itemCards.map((item, index) => (
        <div
          key={item?.card?.info?.id}
          className="bg-slate-50 shadow-md my-2 flex justify-between"
        >
          <div>
            <h1> {item?.card?.info?.name} </h1>
          </div>
          <div>
            <button
              className=" p-4 bg-black text-white"
              onClick={() => handAddClick(item)}
            >
              {" "}
              Add +{" "}
            </button>
            {removeBtn && (
              <button
                className=" p-4 bg-red-950 text-white"
                onClick={() => handleRemoveClick(index)}
              >
                {" "}
                remove{" "}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItems;
