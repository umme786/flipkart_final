import React, { Component } from "react";
import "./index.css";
export default class Bestofferbanner extends Component {
  render() {
    return (
      <div>
        <div className="section145">
          <div className="w-[90%] sm:w-[87%] md:w-[83%] lg:w-[98%] mx-auto">
            <div className="row">
              <div className="col-12 px-8 py-6 border-2 border-black-500">
                <div className="mb-0 main-title-tt lg:flex justify-between w-full items-center button-flex">
                  <div className="main-title-left md:flex items-center">
                    <h2 className="mr-3 lg:mr-8 deals-size">
                      {" "}
                      Deals of the Day{" "}
                    </h2>
                    <p className="text-red-500 flex items-center my-3 md:my-0 mr-2 lg:mr-6">
                      <img
                        src="img/best-offers/timer.svg"
                        className="mr-2 w-6"
                        alt="img"
                      />
                      <span className="cursor-pointer"> Offers Expired. </span>
                    </p>
                    <p className="text-blue-500 flex items-center">
                      <img
                        src="img/best-offers/refresh.svg"
                        className="mr-2 w-4"
                        alt="img"
                      />
                      <div className="cursor-pointer text-blue-500">
                        {" "}
                        Show New Deals VIEW{" "}
                      </div>
                    </p>
                  </div>
                  <div className="my-3 sm:my-0">
                    <button className="bg-blue-500 rounded-sm py-2.5 px-4 text-white shadow-lg font-bold">
                      {" "}
                      VIEW ALL{" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[98%] mx-auto flex flex-wrap justify-between shadow-md ban-main">
                <div className="ban-img w-[40%] md:w-[25%] lg:w-[15%] mx-2 my-6">
                  <a href="#" className="best-offer-item offr-none text-center">
                    <img
                      src="img/best-offers/offer1.jpeg"
                      className="mx-auto my-4"
                      alt="img"
                    />
                    <div className="cmtk_dt">
                      <div
                        className="product_countdown-timer offer-counter-text"
                        data-countdown="2021/01/06"
                      >
                        {" "}
                        <p className="text-black font-medium">
                          {" "}
                          Rakhi & Rakhi Sets{" "}
                        </p>{" "}
                        <p className="text-green-600"> Min. 50% Off </p>{" "}
                        <p className="text-gray-400">
                          {" "}
                          Excusive Offers For You{" "}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ban-img w-[40%] md:w-[25%] lg:w-[15%] mx-2 my-6">
                  <a href="#" className="best-offer-item offr-none text-center">
                    <img
                      src="img/best-offers/offer2.jpeg"
                      className="mx-auto my-4"
                      alt="img"
                    />
                    <div className="cmtk_dt">
                      <div
                        className="product_countdown-timer offer-counter-text"
                        data-countdown="2021/01/06"
                      >
                        {" "}
                        <p className="text-black font-medium">
                          {" "}
                          Never on Power Banks{" "}
                        </p>{" "}
                        <p className="text-green-600"> From ₹494 </p>{" "}
                        <p className="text-gray-400"> Callmate, conekt.... </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ban-img w-[40%] md:w-[25%] lg:w-[15%] mx-2 my-6">
                  <a href="#" className="best-offer-item offr-none text-center">
                    <img
                      src="img/best-offers/offer3.jpeg"
                      className="mx-auto my-4"
                      alt="img"
                    />
                    <div className="cmtk_dt">
                      <div
                        className="product_countdown-timer offer-counter-text"
                        data-countdown="2021/01/06"
                      >
                        {" "}
                        <p className="text-black font-medium">
                          {" "}
                          Catwalk, Allen Solly & more{" "}
                        </p>{" "}
                        <p className="text-green-600">
                          {" "}
                          40-60% +Extra 10% Off{" "}
                        </p>{" "}
                        <p className="text-gray-400">
                          {" "}
                          Flats, Shoes & more{" "}
                        </p>{" "}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ban-img w-[40%] md:w-[25%] lg:w-[15%] mx-2 my-6">
                  <a href="#" className="best-offer-item offr-none text-center">
                    <img
                      src="img/best-offers/offer4.jpeg"
                      className="mx-auto my-4"
                      alt="img"
                    />
                    <div className="cmtk_dt">
                      <div
                        className="product_countdown-timer offer-counter-text"
                        data-countdown="2021/01/06"
                      >
                        {" "}
                        <p className="text-black font-medium">
                          {" "}
                          Smart Watch Screen Guards{" "}
                        </p>{" "}
                        <p className="text-green-600"> From 199 </p>{" "}
                        <p className="text-gray-400"> Protect Your Screen </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ban-img w-[40%] md:w-[25%] lg:w-[15%] mx-2 my-6">
                  <a href="#" className="best-offer-item offr-none text-center">
                    <img
                      src="img/best-offers/offer5.jpeg"
                      className="mx-auto my-4"
                      alt="img"
                    />
                    <div className="cmtk_dt">
                      <div
                        className="product_countdown-timer offer-counter-text"
                        data-countdown="2021/01/06"
                      >
                        {" "}
                        <p className="text-black font-medium">
                          {" "}
                          Wallets & Belts{" "}
                        </p>{" "}
                        <p className="text-green-600">
                          {" "}
                          Min 40% Off+Extra 10%{" "}
                        </p>{" "}
                        <p className="text-gray-400">
                          {" "}
                          Don't Miss the Crazy Deal{" "}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ban-img w-[40%] md:w-[25%] lg:w-[15%] mx-2 my-6">
                  <a href="#" className="best-offer-item offr-none text-center">
                    <img
                      src="img/best-offers/offer6.jpeg"
                      className="mx-auto my-4"
                      alt="img"
                    />
                    <div className="cmtk_dt">
                      <div
                        className="product_countdown-timer offer-counter-text"
                        data-countdown="2021/01/06"
                      >
                        {" "}
                        <p className="text-black font-medium">
                          {" "}
                          Home Furnishing Range{" "}
                        </p>{" "}
                        <p className="text-green-600"> Upto 80% OFF </p>{" "}
                        <p className="text-gray-400">
                          {" "}
                          Curtains, Bedsheets & More{" "}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-12 px-8 py-6 border-2 border-black-500">
                <div className="mb-0 main-title-tt">
                  <div className="main-title-left sm:flex justify-between w-full items-center">
                    <h2 className="mr-8 deals-size"> Monsoon Must-haves </h2>
                    <button className="bg-blue-500 rounded-sm py-2.5 px-4 my-3 sm:my-0 text-white shadow-lg font-bold">
                      {" "}
                      VIEW ALL{" "}
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[98%] mx-auto flex flex-wrap justify-between shadow-md ban-main">
                <div className="ban-img w-[40%] md:w-[25%] lg:w-[15%] mx-2 my-6">
                  <a href="#" className="best-offer-item offr-none text-center">
                    <img
                      src="img/best-offers/mon1.jpeg"
                      className="mx-auto my-4"
                      alt="img"
                    />
                    <div className="cmtk_dt">
                      <div
                        className="product_countdown-timer offer-counter-text"
                        data-countdown="2021/01/06"
                      >
                        {" "}
                        <p className="text-black font-medium">
                          {" "}
                          Plants Saplings{" "}
                        </p>{" "}
                        <p className="text-green-600"> Min. 50% Off </p>{" "}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ban-img w-[40%] md:w-[25%] lg:w-[15%] mx-2 my-6">
                  <a href="#" className="best-offer-item offr-none text-center">
                    <img
                      src="img/best-offers/mon2.jpeg"
                      className="mx-auto my-4"
                      alt="img"
                    />
                    <div className="cmtk_dt">
                      <div
                        className="product_countdown-timer offer-counter-text"
                        data-countdown="2021/01/06"
                      >
                        {" "}
                        <p className="text-black font-medium">
                          {" "}
                          Hair Oil{" "}
                        </p>{" "}
                        <p className="text-green-600"> Min. 20% Off </p>{" "}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ban-img w-[40%] md:w-[25%] lg:w-[15%] mx-2 my-6">
                  <a href="#" className="best-offer-item offr-none text-center">
                    <img
                      src="img/best-offers/mon3.jpeg"
                      className="mx-auto my-4"
                      alt="img"
                    />
                    <div className="cmtk_dt">
                      <div
                        className="product_countdown-timer offer-counter-text"
                        data-countdown="2021/01/06"
                      >
                        {" "}
                        <p className="text-black font-medium">
                          {" "}
                          Mosquito killers{" "}
                        </p>{" "}
                        <p className="text-green-600"> Min. 50% Off </p>{" "}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ban-img w-[40%] md:w-[25%] lg:w-[15%] mx-2 my-6">
                  <a href="#" className="best-offer-item offr-none text-center">
                    <img
                      src="img/best-offers/mon4.jpeg"
                      className="mx-auto my-4"
                      alt="img"
                    />
                    <div className="cmtk_dt">
                      <div
                        className="product_countdown-timer offer-counter-text"
                        data-countdown="2021/01/06"
                      >
                        {" "}
                        <p className="text-black font-medium">
                          {" "}
                          Coffee Powder{" "}
                        </p>{" "}
                        <p className="text-green-600"> Min. 10% Off </p>{" "}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ban-img w-[40%] md:w-[25%] lg:w-[15%] mx-2 my-6">
                  <a href="#" className="best-offer-item offr-none text-center">
                    <img
                      src="img/best-offers/mon5.jpeg"
                      className="mx-auto my-4"
                      alt="img"
                    />
                    <div className="cmtk_dt">
                      <div
                        className="product_countdown-timer offer-counter-text"
                        data-countdown="2021/01/06"
                      >
                        {" "}
                        <p className="text-black font-medium">
                          {" "}
                          Home Cleaning Sets{" "}
                        </p>{" "}
                        <p className="text-green-600"> Min. 50% Off </p>{" "}
                      </div>
                    </div>
                  </a>
                </div>
                <div className="ban-img w-[40%] md:w-[25%] lg:w-[15%] mx-2 my-6">
                  <a href="#" className="best-offer-item offr-none text-center">
                    <img
                      src="img/best-offers/mon6.jpeg"
                      className="mx-auto my-4"
                      alt="img"
                    />
                    <div className="cmtk_dt">
                      <div
                        className="product_countdown-timer offer-counter-text"
                        data-countdown="2021/01/06"
                      >
                        {" "}
                        <p className="text-black font-medium">
                          {" "}
                          Tea Powder{" "}
                        </p>{" "}
                        <p className="text-green-600"> Min. 10% Off </p>{" "}
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-md-12 my-6">
                <a href="#" className="code-offer-item text-center">
                  <img
                    src="img/best-offers/offer.jpg"
                    className="mx-auto my-4"
                    alt="img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
