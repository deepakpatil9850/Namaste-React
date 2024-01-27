import { useDispatch, useSelector } from "react-redux";
import MenuItems from "./MenuItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return cartItems.length === 0 ? (
    <div>
      <h1>Please Add Items </h1>
    </div>
  ) : (
    <div className="w-6/12 m-auto">
      <button onClick={handleClearCart} className="p-4 m-4 bg-black text-white">
        {" "}
        Clear Cart{" "}
      </button>
      <MenuItems itemCards={cartItems} removeBtn={true} />
    </div>
  );
};

export default Cart;
