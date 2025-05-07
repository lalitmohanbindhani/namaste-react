const ResturantCard = (props) => {
  const { resData } = props;
  <h5>{resData.deliveryTime} Minutes</h5>;
  const { name, cuisine, rating, costForTwo, deliveryTime, image } = resData;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img alt="rest-logo" className="rest-logo" src={image} />
      <h4>{name}</h4>
      <h5>{cuisine.join(", ")}</h5>
      <h5>{rating} stars</h5>
      <h5>{costForTwo / 100} For Two</h5>
      <h5>{deliveryTime} Minutes</h5>
    </div>
  );
};

export default ResturantCard;
