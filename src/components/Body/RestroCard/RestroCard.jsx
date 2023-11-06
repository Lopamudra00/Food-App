import React from "react";
import { IMG_CDN_URL } from "../../config";
const RestroCard = ({ info }) => {
    return (
        <div className="p-5 m-5 w-80 h-96 shadow-lg bg-amber-100 rounded-lg ">
            <img className="rounded-xl img" src={
                IMG_CDN_URL + info?.cloudinaryImageId
            } />
            <h2 className="font-bold">{info?.name}</h2>
            <h3 className="text-left"> {info?.cuisines.join(',')} </h3>
            <h4>{info?.avgRating} stars</h4>
            <h4> {info?.sla.deliveryTime} mins </h4>
        </div>
    )
}

export default RestroCard  