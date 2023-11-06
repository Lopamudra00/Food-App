import { useEffect, useState } from "react";
import { FETCH_SWIGGY_URL } from "../components/config";
const useAllRestaurant = () => {
    const [allRestaurant, setAllRestaurant] = useState([]);
    // const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    useEffect(() => {
        getRestaurants();
    }, []);
    async function getRestaurants() {
        const data = await fetch(FETCH_SWIGGY_URL);
        const json = await data.json();
        console.log(json);
        setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return allRestaurant;
}
export default useAllRestaurant;