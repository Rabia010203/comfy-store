import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearItem } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";
import { useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userState.user);
  const dispatch = useDispatch();
 
  const logout = () => {
    navigate("/");
    dispatch(clearItem());
    dispatch(logoutUser());
    queryClient.removeQueries();
  };
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end items-center">
        {user ? (
          <div className="flex gap-x-2 items-center  sm:gap-x-8">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <button
              onClick={logout}
              className="btn btn-xs btn-outline  btn-primary"
            >
              LOGOUT
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-x-6">
            <Link to="/login" className="link link-hover text-xs sm:text-sm ">
              Sign in / Guest
            </Link>
            <Link
              to="/register"
              className=" link link-hover capitalize text-xs sm:text-sm "
            >
              Create account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
