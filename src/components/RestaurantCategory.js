import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/*Header*/}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-md">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-black border-1 px-1">▼</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
