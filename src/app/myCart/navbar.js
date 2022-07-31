import React from "react";
import "./styles/navbar.css";

const Navbar = ({ setShow, size }) => {
  return (
    <nav className="w-full">
      <div className="nav_box w-full py-2 px-6 sm:px-12 flex items-center justify-between bg-[#2874f0]">
        <span
          className="flex justify-between items-center w-full my_shop text-3xl font-bold cursor-pointer text-white"
          onClick={() => setShow(true)}
        >
          <div className="deals-size">My Cart</div>
          <button className="bg-blue-500 hover:bg-blue-400 text-white text-[17px] rounded-lg py-1.5 sm:py-2.5 px-6 sm:px-10 mr-2 sm:mr-5 shadow-lg font-bold">
            {" "}
            View More..{" "}
          </button>
        </span>
        <div className="cart cursor-pointer" onClick={() => setShow(false)}>
          <span className="text-[#242485] text-2xl">
            <i className="fas fa-cart-plus align-middle text-white"></i>
          </span>
          <span className="px-1 bg-red-500 text-white font-bold relative rounded-sm">
            {size}
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
