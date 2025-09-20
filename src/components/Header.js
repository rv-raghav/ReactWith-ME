import { LOGO_URL } from "../utils.js/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils.js/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <header className="flex justify-around items-center p-4 bg-gray-800 text-white shadow-md">
      <img
        className="w-20 h-20 rounded-full shadow-lg object-cover"
        src={LOGO_URL}
        alt="logo"
      />

      <nav className="flex items-center space-x-6">
        <ul className="flex items-center space-x-6 gap-2">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-gray-300">
              Grocery
            </Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          className="border border-gray-400 rounded-lg px-4 py-2 hover:bg-gray-700 transition"
          onClick={() =>
            setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
          }
        >
          {btnNameReact}
        </button>
      </nav>
    </header>
  );
};

export default Header;
