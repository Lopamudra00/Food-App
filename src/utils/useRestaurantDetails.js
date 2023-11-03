import { useEffect, useState } from "react"
import { FETCH_RESTAURANT } from "../components/config";

const useRestaurantDetails = (resId) => {
    const [restaurantDetails, setRestaurantDetails] = useState([]);

    useEffect(() => {
        getRestaurantDetails();
    }, [resId]);
    async function getRestaurantDetails() {
        const data = await fetch(FETCH_RESTAURANT + resId);
        const json2 = await data.json();
        setRestaurantDetails(json2?.data?.cards[0]?.card?.card?.info);
        console.log("restaurant details");
    }
    return restaurantDetails;
}

export default useRestaurantDetails