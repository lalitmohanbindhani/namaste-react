import { RESTRO_API } from "../utils/constants";

const ResturantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData;
  return (
    <div className="p-4 m-2 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-lg">
      <img
        alt="rest-logo"
        className="rounded-lg w-[170px] h-[140px]"
        src={RESTRO_API + cloudinaryImageId}
      />
      <h4 className="font-bold py-3 text-md">{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.deliveryTime} Minutes</h5>
    </div>
  );
};

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-1 rounded-lg">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
