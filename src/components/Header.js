import { LOGO_URL } from "../utils/constants";
import { use, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  //If no dependency array => useEffect is called on every render
  //if dependency array is empty = [] => useEffect is called on initial render (only once)
  //if dependency array is [logBtn] => called everytime when logBtn is updated

  // useEffect(() => {
  //   console.log("useEffect renddered");
  // }, [logBtn]);

  return (
    <div className="flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-50 shadow-lg">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            onClick={() => {
              logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
            }}
            className="login"
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
