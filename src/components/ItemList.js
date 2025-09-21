import React from "react";

const ItemList = ({ items }) => {
  return (
    <div className="p-4">
      {items.map((item) => (
        <div
          className="flex justify-between items-start py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 px-4 rounded-md"
          key={item.card.info.id}
        >
          <div className="flex-1 pr-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-gray-800 text-base">
                {item.card.info.name}
              </h3>
            </div>
            <p className="text-green-600 font-bold text-sm mb-2">
              ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
            </p>
            {item.card.info.description && (
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.card.info.description}
              </p>
            )}
            {item.card.info.ratings?.aggregatedRating?.rating && (
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 text-sm mr-1">⭐</span>
                <span className="text-sm text-gray-600">
                  {item.card.info.ratings.aggregatedRating.rating}
                </span>
              </div>
            )}
          </div>

          <div className="flex-shrink-0 ml-4">
            {item.card.info.imageId ? (
              <div className="relative">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`}
                  alt={item.card.info.name}
                  className="w-20 h-20 object-cover rounded-lg shadow-md"
                />
                <button className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-green-600 font-bold px-4 py-1 rounded-md shadow-lg hover:bg-green-50 transition-colors duration-200 text-xs border border-green-200">
                  ADD
                </button>
              </div>
            ) : (
              <button className="bg-green-600 text-white font-bold px-6 py-2 rounded-md hover:bg-green-700 transition-colors duration-200 shadow-md text-sm">
                ADD
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
