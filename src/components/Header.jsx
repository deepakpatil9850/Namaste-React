import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector((store) => store.cart.items);

  return (
    <div className="w-full bg-slate-300">
      <div className="flex justify-between p-2">
        <div className="w-20">
          <img
            alt="logo"
            src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?w=740&t=st=1705138166~exp=1705138766~hmac=498c3a95a4c0f1cf3164905169f7bd9d0668fed947b09bcd9a40e5ee3da4dbc6"
            className="logo"
          />
        </div>

        <div className="justify-items-center">
          <ul className="flex ">
            <li className="m-3">
              <Link to="/">Home</Link>
            </li>
            <li className="m-3">
              <Link to="/about">About</Link>
            </li>
            <li className="m-3">
              <Link to="/contact">contact</Link>
            </li>
            <li className="m-3">
              <Link to="/cart">cart({cart.length})</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
