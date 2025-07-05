import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL, Default_Photo } from "../utils/constants";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { FiLock } from "react-icons/fi"; // Feather lock icon
import { FiUser, FiUsers, FiInbox } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location=useLocation();

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
        navigate("/home");
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
        {user ? (
        <>
          <div className="flex items-center text-sm  text-base-content/60 font-medium px-4  rounded-lg ">
            Welcome, {user.firstName}
            <div className="dropdown dropdown-end mx-5 flex">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar  hover:bg-base-200"
              >
                <div className="w-10 rounded-full ring ring-base ring-offset-base-100 ring-offset-0">
                  <img alt="User" src={user.photoURL || Default_Photo}></img>
                </div>
              </div>
              <ul
                
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[100]  mt-3 w-52 p-2 shadow-lg border-base-300"
              >
                <li>
                  <Link to="/profile" > 
                   <FiUser className="inline mr-2 text-lg" />
                      Profile
                   
                  </Link>
                </li>
             
                <li>
                  <Link to="/connections">
                 <FiUsers className="inline mr-2 text-lg" />
                  Connections</Link>
                </li>
                <li>
                  <Link to="/requests">
                  <FiInbox className="inline mr-2 text-lg" />
                      Requests
                  </Link>
                </li>
                <li>
                  <Link onClick={handleLogout}>
                  <CiLogout className="inline mr-2 text-lg"  />Logout</Link>
                </li>
              </ul>
            </div>
          </div>
          </>           ) : (
            <>
              <Link
                to="/login"
                className="btn btn-outline btn-sm border-primary text-primary px-4 flex items-center gap-2 transform transition duration-300 ease-in-out hover:scale-105 hover:brightness-110"
              >
                <FiLock className="text-lg" />
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-primary btn-sm text-white px-4 font-semibold transform transition duration-300 ease-in-out hover:scale-105 hover:brightness-110"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>   
    </div>
  );
};

export default NavBar;
