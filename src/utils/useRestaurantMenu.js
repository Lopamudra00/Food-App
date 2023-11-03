import { useEffect, useState } from "react";
import { FETCH_RESTAURANT } from "../components/config";
const useRestaurantMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState([]);
    useEffect(() => {
        getRestaurantMenu();

    }, [resId]);

    async function getRestaurantMenu() {
        const data = await fetch(FETCH_RESTAURANT + resId);
        const json = await data.json();
        console.log(json);
        setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        console.log("menulist");

        console.log(
            restaurantMenu.slice(3, 11).map((item) => {
                return item.card.card.title;
            })
        );
    }
    return restaurantMenu;
}

export default useRestaurantMenu;