import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurantDetails from "../../utils/useRestaurantDetails"
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import Shimmer from "../Shimmer/Shimmer";
import useOnline from "../../utils/useOnline";
import { addItem } from "../../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const params = useParams();//it gives id
    const { resId } = params;
    console.log(params);
    const restaurantDetails = useRestaurantDetails(resId);
    const restaurantMenu = useRestaurantMenu(resId);
    const dispatch = useDispatch();
    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };
    const isOnline = useOnline();
    if (!isOnline) {
        return <h1>you are offline</h1>
    }
    return (!restaurantMenu) ? <Shimmer /> : (
        <div className="flex p-5 m-5">
            <div className="bg-amber-100 m-5 rounded-md p-5">
                <h1>Restaurant id: {resId}</h1>
                <img src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId} />
                <h2 className="font-bold m-2">{restaurantDetails.name}</h2>
                <h2 className="m-2 items-start">Location: {restaurantDetails.locality} , {restaurantDetails.area}{restaurantDetails.city} </h2>
                <h3 className="m-2"> {restaurantDetails.costForTwoMessage} </h3>
            </div>
            <div className="items-start h-96 w-96 mt-16 p-5 m-5">
                <h1 className="font-bold">Menu List</h1>
                <ul>
                    {
                        restaurantMenu.slice(3, 9).map((item) => {
                            return (<li className="my-1">
                                {item.card.card.title} - <button className="p-1 border bg-green-50"
                                    onClick={() => addFoodItem()}
                                >Add
                                </button>
                            </li>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu