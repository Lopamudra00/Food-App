import React from "react";
import './RestroCard.css'
import { IMG_CDN_URL } from "../../config";
const RestroCard = ({ info }) => {
    return (
        <div className="card">
            <img className="img" src={
                IMG_CDN_URL + info?.cloudinaryImageId
            } />
            <h2>{info?.name}</h2>
            <h3> {info?.cuisines.join(',')} </h3>
            <h4>{info?.avgRating} stars</h4>
            <h4> {info?.sla.deliveryTime} mins </h4>
        </div>
    )
}

export default RestroCard  