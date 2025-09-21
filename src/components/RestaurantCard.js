import { CDN_URL } from "../utils.js/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  return (
    <div className="w-48 m-4 p-4 border border-gray-200 rounded-lg shadow hover:scale-105 hover:shadow-lg transition gap-3.5">
      <img
        className="w-full h-32 object-cover rounded-md mb-3"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>
      <p className="text-sm">⭐ {avgRating}</p>
      <p className="text-sm">{costForTwo}</p>
    </div>
  );
};

// Higher order component
// input - restaurant card => restaurantcardPromoted

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <lable>Promoted</lable>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };
export default RestaurantCard;
