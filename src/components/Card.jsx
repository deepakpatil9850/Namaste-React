import { cloudLink } from "../utils/loadData";

const Card = (props) =>{
    const {name, cuisines, costForTwo, avgRating} = props?.resData?.info;
    return(
        <div className="w-40 m-2 p-2 shadow-lg bg-slate-50">
                <img alt="food-img" src={cloudLink+props?.resData?.info?.cloudinaryImageId } className="cart-img" />
                <h3 className="font-semibold">{name}</h3>
                <h5 className=" font-thin text-sm">{cuisines.join(", ")}</h5>
                <h5>{costForTwo}</h5>
                <h4 className="font-medium">{avgRating}</h4>
        </div>
    )
}

export default Card;