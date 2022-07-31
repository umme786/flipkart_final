import React, { useState } from "react";
import list from "./data";
import Cards from "./card";

const Amazon = ({ handleClick }) => {
  return (
    <section className="w-[90%] mx-auto mt-4 sm:mt-10 lg:mt-20 flex flex-wrap justify-center md:justify-between">
      {list.map((item) => (
        <Cards
          key={item.id}
          item={item}
          handleClick={handleClick}
          className="w-[20%]"
        />
      ))}
    </section>
  );
};
export default Amazon;
