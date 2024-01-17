import { cloudLink } from "../utils/loadData";

const Card = (props) =>{
    const {name, cuisines, costForTwo, avgRating} = props?.resData?.info;
    return(
        <div className="card">
                <img alt="food-img" src={cloudLink+props?.resData?.info?.cloudinaryImageId } className="cart-img" />
                <h3>{name}</h3>
                <h5>{cuisines.join(", ")}</h5>
                <h5>{costForTwo}</h5>
                <h4>{avgRating}</h4>
        </div>
    )
}

export default Card;