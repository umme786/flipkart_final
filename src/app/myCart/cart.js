import React, { useState, useEffect } from "react";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article className="w-[95%] md:w-[80%] mx-auto bg-white items-center my-20 px-6 py-2">
      {cart.map((item) => (
        <div
          className="cart_box sm:flex items-center border-b-2 pb-3 justify-between border-[#d0e2ff]"
          key={item.id}
        >
          <div className="cart_img flex items-center justify-center">
            <img src={item.img} alt="img" className="w-[80px]" />
            <p className="font-bold ml-6">{item.title}</p>
          </div>
          <div className="text-center">
            <button
              onClick={() => handleChange(item, 1)}
              className="py-2 px-2 font-bold mr-1"
            >
              +
            </button>
            <button>{item.amount}</button>
            <button
              onClick={() => handleChange(item, -1)}
              className="py-2 px-2 font-bold ml-1"
            >
              -
            </button>
          </div>
          <div className="flex justify-center mt-6 sm:mt-0">
            <span className="bg-[#2874f0] hover:bg-[#2265d2] text-white justify-center py-2 px-8 rounded-md mr-4">
              {item.price}
            </span>
            <button
              onClick={() => handleRemove(item.id)}
              className="text-white border-0 outline-none cursor-pointer py-2 px-4 rounded-md bg-[#fb641b] hover:bg-[#e35c19] font-bold tracking-wide"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="total flex justify-between my-6 items-center">
        <span className="text-xl sm:text-2xl font-bold tracking-wide text-[#2874f0]">
          {" "}
          Total Amount{" "}
        </span>
        <span className="text-xl sm:text-2xl px-3 sm:px-10 py-2 sm:py-2.5 bg-[#fb641b] hover:bg-[#e35c19] text-white rounded-md font-bold ">
          {" "}
          Rs.{price}
        </span>
      </div>
    </article>
  );
};
export default Cart;
