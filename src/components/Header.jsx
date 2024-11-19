import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Header = () => {
  const { logOutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded-lg shadow-md bg-[#10B981] text-white font-semibold hover:bg-[#34D399]"
              : "text-neutral"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded-lg shadow-md bg-[#10B981] text-white font-semibold hover:bg-[#34D399]"
              : "text-neutral"
          }
          to={"/auth/updateprofile"}
        >
          Update Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-4 py-2 rounded-lg shadow-md bg-[#10B981] text-white font-semibold hover:bg-[#34D399]"
              : "text-gray-900"
          }
          to={"/auth/profile"}
        >
          My Profile
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="py-5">
      <div className="navbar w-11/12 mx-auto">
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
          <ul className="flex items-center gap-4">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex gap-2 items-center">
            {user && user?.photoURL && (
              <img
                title={user?.displayName}
                src={user.photoURL}
                className="h-10 w-10 rounded-full object-cover"
                alt="user"
              />
            )}
            {user ? (
              <button
                onClick={logOutUser}
                className="bg-[#10B981] hover:bg-[#34D399] px-4 py-2 rounded-lg shadow-md text-white transition-all duration-300"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/auth/login")}
                className="bg-[#34D399] hover:bg-[#34D399] px-4 py-2 rounded-lg shadow-md text-white transition-all duration-300"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
