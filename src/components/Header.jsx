import React from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink  className={({ isActive}) =>
    isActive ? "text-green-600 font-semibold" : ""
  } to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive}) =>
    isActive ? "text-green-600 font-semibold" : ""
  } to={"/updateProfile"}>Update Profile</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive}) =>
    isActive ? "text-green-600 font-semibold" : ""
  } to={"/profile"}>Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <FaBars />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="text-xl font-semibold">
          Eco<span className="text-green-600">Quest</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn rounded-xl bg-green-600 text-white font-semibold">Login</button>
      </div>
    </div>
  );
};

export default Header;
