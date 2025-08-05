import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const ResturantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-5 text-xl">{name}</h1>
      <p className="font-bold text-l">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card.card.categoryId}
            data={category?.card?.card}
            showItem={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        );
      })}
    </div>
  );
};
export default ResturantMenu;
