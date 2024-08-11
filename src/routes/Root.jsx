import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { changeLoginStatust } from "../features/login/loginSlice";

export default function Root() {
  const loggedIn = useSelector((state) => state.login.loggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/verify", {withCredentials: true})
      .then((response) => {
        dispatch(changeLoginStatust(true));
      })
      .catch((error) => {
        dispatch(changeLoginStatust(false));
      });
  }, []);

  return (
    <>
      <header className="h-[60px] shadow-lg flex justify-center py-6 w-full z-[999] bg-white sticky top-0 left-0 md:h-[80px] ">
        <div className="container md:w-[90%] flex justify-between items-center">
          <h1 className="ml-3 sm:text-[21px] font-bold">BookMyMovie</h1>
          <nav className="hidden md:flex">
            <ul className="flex gap-6 font-semibold cursor-pointer">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <a href="#"></a>About
              </li>
              <li>
                <a href="#"></a>Movie
              </li>
              <li>
                <a href="#"></a>Contact
              </li>
              {loggedIn ? (
                <li>
                  <Link to={"/logout"}>Logout</Link>
                </li>
              ) : (
                <li>
                  <Link to={"/login"}>Login</Link>
                </li>
              )}
            </ul>
          </nav>
          {loggedIn && <div className="w-12 h-12 aspect-square bg-gray-300 flex flex-col justify-center items-center rounded-full ">
            <span>s</span>
          </div>}
          <div className="md:hidden">
            <i className="ri-menu-line font-bold text-[23px] mr-3"></i>
          </div>
        </div>
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
}
