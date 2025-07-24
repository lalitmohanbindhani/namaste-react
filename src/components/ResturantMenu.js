import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

// const ResturantMenu = () => {
//   const { resId } = useParams();
//   const resInfo = useResturantMenu(resId);

//   if (resInfo === null) return <Shimmer />;

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards[2]?.card?.card.info;

//   console.log(resInfo?.cards);

//   // Extract itemCards from both possible locations
//   const itemCards1 =
//     resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
//       ?.card?.itemCards || [];
//   const itemCards2 =
//     resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
//       ?.card?.itemCards || [];

//   // Merge itemCards from both locations
//   const allItemCards = [...itemCards1, ...itemCards2];

//   // Check if data exists before rendering
//   if (!name || !cuisines || !costForTwoMessage) {
//     return (
//       <div className="menu">
//         <h1>Menu not available</h1>
//         <p>We could not find the menu for this restaurant.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="menu">
//       <h1>{name}</h1>
//       <p>
//         {cuisines?.join(", ")} - {costForTwoMessage}
//       </p>

//       {allItemCards.length > 0 ? (
//         <ul>
//           {allItemCards.map((item, index) => (
//             <li key={`${item.card?.info?.id}-${index}`}>
//               {item.card?.info?.name} - ₹
//               {Math.ceil(item.card?.info?.price / 100 || 0)}
//             </li>
//           ))}
//         </ul>
//       ) : null}
//     </div>
//   );
// };

const ResturantMenu = () => {
  return (
    <div>
      <h1>Name of the Resturant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biriyani</li>
        <li>Burger</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};
export default ResturantMenu;
