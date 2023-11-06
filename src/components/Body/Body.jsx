import React, { useContext, useEffect, useState } from "react";
import RestroCard from "./RestroCard/RestroCard";
import Shimmer from "../Shimmer/Shimmer";
import { filterData } from "../../utils/shared";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/UserContext";
const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const { user, setUser } = useContext(UserContext);
    console.log("render()")
    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.3146501&lng=85.8668548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
        console.log(json);
        setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //Early return (not render component)
    const isOnline = useOnline();
    if (!isOnline) {
        return <h1> Offline,please check your internet connection</h1>
    }
    if (!allRestaurant) return null;
    return (filteredRestaurant.length === 0) ? <Shimmer /> :
        (
            <>
                <div className=" pl-5 ml-9 h-15 m-5 border-slate-400	 search-bar">
                    <input
                        type="text"
                        className="h-10 p-2 rounded-md border-2 border-slate-500"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            const data = filterData(searchText, allRestaurant);
                            setFilteredRestaurant(data);
                        }}
                        className="ml-10 mt-20 -mb-8 font-semibold font-sans h-10 w-24 rounded-xl  py-1 bg-amber-200 p-3 drop-shadow-md">Search</button>

                    <input value={user.name}
                        onChange={(e) => {
                            setUser({
                                name: e.target.value,
                                email: "new@gmail.com"
                            })
                        }}


                    ></input>
                </div>
                <div className="flex flex-wrap items-center justify-self-center mx-9 mt-10">
                    {
                        filteredRestaurant.map((res) => {
                            return (
                                <Link to={"/restaurant/" + res.info.id}>
                                    <RestroCard   {...res} key={res.info.id} />
                                </Link>)
                        })
                    }

                </div>

            </>

        )
}

export default Body


