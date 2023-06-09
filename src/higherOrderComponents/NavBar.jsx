import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/homeAssets/logo.svg";
import mobile_logo from "../assets/homeAssets/logo_mobile.svg";
import CloseIcon from "@mui/icons-material/Close";
import {
  Link,
  Navigate,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [show, setShow] = useState(false);
  const router = useLocation();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const showSignOut = () => {
    console.log("sign out....");
    setShow(!show);
  };

  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <div className="">
      <div className="flex flex-row justify-between  max-w-7xl border-b-2 border-main mx-auto items-end py-2 sm:px-4 xl:px-0">
        <Link to="/">
          {/* <h1 className="text-4xl px-5 font-bold text-main">pma.</h1> */}
          <img
            src={logo}
            alt="logo"
            className="hidden md:block relative md:-translate-x-6  md:h-12 h-10 md:scale-150 scale-110 md:top-4 top-2 w-100 mx-2 md:px-4"
          />
          <img
            src={mobile_logo}
            alt="logo"
            className="md:hidden block relative   h-10 scale-110 w-100 mx-2 md:px-4"
          />
        </Link>
        <ul className="hidden md:flex text-main space-x-5 ">
          <NavLink to="/">
            <li
              className={`  text-[18px] ${
                router.pathname === "/" ? "font-bold" : ""
              }`}
            >
              Home
            </li>
          </NavLink>
          <Link to="/explore">
            <li
              className={`  text-[18px] ${
                router.pathname === "/explore" ? "font-bold" : ""
              }`}
            >
              Explore University
            </li>
          </Link>
          <Link to="/about">
            <li
              className={`  text-[18px] ${
                router.pathname === "/about" ? "font-bold" : ""
              }`}
            >
              About
            </li>
          </Link>
          <Link to="/pricing">
            <li
              className={`  text-[18px] ${
                router.pathname === "/pricing" ? "font-bold" : ""
              }`}
            >
              Pricing
            </li>
          </Link>
          <Link to="/contact">
            <li
              className={`  text-[18px] ${
                router.pathname === "/contact" ? "font-bold" : ""
              }`}
            >
              Contact Us (9192939495)
            </li>
          </Link>
        </ul>
        <>
          {currentUser ? (
            <div>
              <img
                src="https://imgs.search.brave.com/IfCu-rlEANrldypDGTbEYE4_XyiekbuS1xeWWgBNJ7M/rs:fit:1000:1080:1/g:ce/aHR0cHM6Ly9jZG4x/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC83MS84NS9t/YWxlLWF2YXRhci1w/cm9maWxlLWljb24t/cm91bmQtbWFuLWZh/Y2UtdmVjdG9yLTE4/MzA3MTg1LmpwZw"
                alt="profile"
                className="w-10 h-auto rounded-full cursor-pointer"
                // onClick={showSignOut}
                onClick={() => navigate("/dashboard/applications")}
              />
              {show && (
                <div className="absolute right-2 bg-light rounded-md p-4">
                  <button
                    className="border px-2 py-1 rounded-sm"
                    onClick={logout}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex justify-center items-end space-x-1">
              <Link to="/login">
                <button className="w-[100px] text-main text-[18px] uppercase">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="w-[100px] bg-main uppercase text-white p-2 rounded">
                  Register
                </button>
              </Link>
            </div>
          )}
        </>
        <div onClick={handelNav} className="block md:hidden px-4 text-main">
          {!nav ? <MenuIcon /> : <CloseIcon />}
        </div>

        <div
          className={
            nav
              ? "bg-white fixed left-0 top-0 w-[60%] h-full border-r border-r-black-900 duration-700 ease-in-out z-50"
              : "bg-white duration-10 h-0 ease-in border-none fixed left-[-100%]"
          }
          onClick={handelNav}
        >
          <Link to="/">
            <img src={logo} alt="logo" className="scale-120 my-5 " />
          </Link>
          <ul className="mt-5">
            <Link to="/">
              <li
                className={`p-2 pl-5 text-[18px]  ${
                  router.pathname === "/" ? "font-bold" : ":"
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/explore">
              <li
                className={`p-2 pl-5 text-[18px]  ${
                  router.pathname === "/explore" ? "font-bold" : ":"
                }`}
              >
                Explore Universities
              </li>
            </Link>
            <Link to="/about">
              <li
                className={`p-2 pl-5 text-[18px]  ${
                  router.pathname === "/about" ? "font-bold" : ":"
                }`}
              >
                About
              </li>
            </Link>
            <Link to="/pricing">
              <li
                className={`p-2 pl-5 text-[18px]  ${
                  router.pathname === "/pricing" ? "font-bold" : ":"
                }`}
              >
                Pricing
              </li>
            </Link>
            <Link to="/contact">
              <li
                className={`p-2 pl-5 text-[18px]  ${
                  router.pathname === "/contact" ? "font-bold" : ":"
                }`}
              >
                Contact us
              </li>
            </Link>
          </ul>
          <div className="flex flex-col text-main font-semibold">
            <Link to="/login">
              <p className="p-2 pl-5 text-[18px] ">Login</p>
            </Link>
            <Link to="/register">
              <p className="p-2 pl-5 text-[18px] ">Register</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
