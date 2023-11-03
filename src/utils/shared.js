
export function filterData(searchText, restaurant) {
    const filterData = restaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
    return filterData;
}

// name={res.info.name} cloudinaryImageId={res.info.cloudinaryImageId} cuisines={res.info.cuisines} deliveryTime={res.info.sla.deliveryTime} avgRating={res.info.avgRating}

//json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//data>cards[2]>groupedCard>cardGroupedMap>REGUL>cards[2]>card>card>itemCards>cta

//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.3146501&lng=85.8668548&restaurantId=76135&catalog_qa=undefined&submitAction=ENTER