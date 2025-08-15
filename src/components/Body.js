import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfResturant, setListOfResturant] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  useEffect(() => {
    fetchedData();
  }, []);

  const fetchedData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfResturant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setFilteredResturant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 mr-0">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-gray-400 shadow-sm"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="px-4 py-1 my-4 mx-1 bg-green-100 hover:bg-green-200 rounded-lg"
            onClick={() => {
              const fillterRes = listOfResturant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturant(fillterRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 ml-0 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-100 hover:bg-gray-200  rounded-lg"
            onClick={() => {
              const filteredList = listOfResturant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredResturant(filteredList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="search m-4  ml-0 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-solid border-gray-400 shadow-sm px-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredResturant.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturant/" + resturant.info.id}>
            {resturant.info.avgRating > 4.5 ? (
              <ResturantCardPromoted resData={resturant.info} />
            ) : (
              <ResturantCard resData={resturant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
