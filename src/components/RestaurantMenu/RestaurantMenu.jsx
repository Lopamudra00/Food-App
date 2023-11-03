import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurantDetails from "../../utils/useRestaurantDetails"
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Shimmer from "../Shimmer/Shimmer";
import useOnline from "../../utils/useOnline";

const RestaurantMenu = () => {
    const params = useParams();//it gives id
    const { resId } = params;
    console.log(params);
    const restaurantDetails = useRestaurantDetails(resId);
    const restaurantMenu = useRestaurantMenu(resId);

    const isOnline = useOnline();
    if (!isOnline) {
        return <h1>you are offline</h1>
    }
    return (!restaurantMenu) ? <Shimmer /> : (
        <div>
            <div>
                <h1>Restaurant id: {resId}</h1>
                <img src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId} />
                <h2>Restaurant Name: {restaurantDetails.name}</h2>
                <h2>Location: {restaurantDetails.locality} , {restaurantDetails.area}{restaurantDetails.city} </h2>
                <h3> {restaurantDetails.costForTwoMessage} </h3>
            </div>
            <div>
                <h1>menu list</h1>
                <ul>
                    {
                        restaurantMenu.slice(3, 11).map((item) => {
                            return <li> {item.card.card.title}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu