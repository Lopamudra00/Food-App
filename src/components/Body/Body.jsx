import React, { useEffect, useState } from "react";
import './Body.css'
import RestroCard from "./RestroCard/RestroCard";
import Shimmer from "../Shimmer/Shimmer";
import { filterData } from "../../utils/shared";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

const Body = () => {
    const [allRestaurant, setAllRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    console.log("render()")
    useEffect(() => {
        //API Call
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
                <div className="search-bar">
                    <input
                        type="text"
                        className="search-input"
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
                        className="search-btn">Search</button>
                </div>
                <div className="restroCards">
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


