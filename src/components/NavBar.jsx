import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/logout",
        {},
        { withCredentials: true }
      );
      dispatch(removeUser());
      return navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogoClick = () => {
    if (
      location.pathname === "/login" ||
      location.pathname.startsWith("/login")
    ) {
      navigate("/");
    } else {
      if (user) {
        navigate("/feed");
      } else {
        navigate("/login");
      }
    }
  };

  return (
    <div className="navbar w-full px-4 sm:px-6 lg:px-8 h-16 flex justify-between">
      <div className="flex items-center">
        <span 
        onClick={handleLogoClick}
        className="cursor-pointer text-2xl sm:text-3xl font-extrabold tracking-tight px-2 select-none bg-gradient-to-r from-sky-400 to-pink-400 text-transparent bg-clip-text transition duration-300 hover:brightness-110 ">
    
          🧑‍💻DevTinder
        </span>
      </div>
      <div className="flex items-center gap-4">
        {user && (
          <div className="flex items-center text-sm  text-base-content/60 font-medium px-4  rounded-lg ">
            Welcome, {user.firstName}
            <div className="dropdown dropdown-end mx-5 flex">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User" src={user.photoURL}></img>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                <li>
                  <Link to="/requests">Request</Link>
                </li>
                <li>
                  <Link onClick={handleLogout}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
