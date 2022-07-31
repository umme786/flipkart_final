import React from "react";

const Cards = ({ item, handleClick }) => {
  const { title, author, price, img } = item;
  return (
    <div className="cards mx-2 p-4 sm:w-[80%] md:w-[40%] lg:w-[30%] xl:w-[20%] my-10 rounded-md hover:cursor-pointer shadow-md hover:shadow-gray-900/50">
      <div className="image_box">
        <img src={img} alt="img" className="mx-auto" />
      </div>
      <div className="details">
        <p class="font-bold text-xl mt-3 mb-2">{title}</p>
        <p className="text-gray-700 text-sm my-3">{author}</p>
        <p className="text-gray-900 font-bold my-3">Price - {price} Rs </p>
        <div className="">
          <button
            onClick={() => handleClick(item)}
            className="bg-blue-500 hover:bg-blue-700 text-md rounded-sm py-3 px-6 text-white shadow-lg font-bold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cards;
