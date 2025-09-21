import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4">
      {/* Accordion Header */}
      <div
        className="bg-white shadow-lg p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200 rounded-lg"
        onClick={handleClick}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-gray-800">
            {data.title} ({data.itemCards.length})
          </span>
          <span
            className={`text-xl transform transition-transform duration-300 ${
              showItems ? "rotate-180" : "rotate-0"
            }`}
          >
            ⬇️
          </span>
        </div>
      </div>

      {/* Accordion Body */}
      {showItems && (
        <div className="bg-white shadow-lg rounded-b-lg animate-fadeIn">
          <div className="border-t border-gray-200">
            <ItemList items={data.itemCards} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
