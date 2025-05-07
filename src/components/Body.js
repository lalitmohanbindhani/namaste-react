import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //State Variable- Supper powerful variaable
  const arr = useState(resList);
  //const [listOfResturants, setListOfResturants] = arr;

  const listOfResturants = arr[0];
  const setListOfResturants = arr[1];

  //Normal Js Variable

  return (
    <div className="body">
      <div className="button">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.rating > 4
            );
            setListOfResturants(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listOfResturants.map((resturant) => (
          <ResturantCard key={resturant.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
