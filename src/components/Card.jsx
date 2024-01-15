import { cloudLink } from "../utils/restroData";

const Card = (props) =>{

    return(
        <div className="card">
                <img alt="food-img" src={cloudLink+props?.resData?.info?.cloudinaryImageId } className="cart-img" />
                <h3>{props?.resData?.info?.name}</h3>
                <h5>{props?.resData?.info?.cuisines.map(cusin=>cusin).join(" ")}</h5>
                <h5>{props?.resData?.info?.costForTwo}</h5>
                <h4>{props?.resData?.info?.avgRating}</h4>
        </div>
    )
}

export default Card;