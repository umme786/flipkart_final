import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
export default class Category extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 9,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };
    return (
      <div
        className="pt-2 pb-2 border-b-2 border-black-900 mb-2"
        style={{ background: "#fff" }}
      >
        <div className="w-[80%] md:w-[90%] mx-auto" id="header-category-bk">
          <Slider {...settings}>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/grocery-staples`,
                  }}
                >
                  <img
                    className="img-fluid mx-auto"
                    src="img/category/slide1.png"
                    alt="grocery-stamples"
                  />
                  <h6 className="font-semibold"> Top Offers </h6>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/personal-care`,
                  }}
                >
                  <img
                    className="img-fluid mx-auto"
                    src="img/category/slide2.png"
                    alt="personalcare"
                  />
                  <h6 className="font-semibold"> Grocery </h6>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/personal-care`,
                  }}
                >
                  <img
                    className="img-fluid mx-auto"
                    src="img/category/slide3.png"
                    alt="personalcare"
                  />
                  <h6 className="font-semibold"> Mobiles </h6>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/personal-care`,
                  }}
                >
                  <img
                    className="img-fluid mx-auto"
                    src="img/category/slide4.png"
                    alt="personalcare"
                  />
                  <div class="dropdown">
                    <h6 className="font-semibold dropbtn">
                      {" "}
                      Fashion
                      <i
                        class="fa fa-angle-down align-middle ml-2"
                        aria-hidden="true"
                      ></i>
                      <div class="dropdown-content">
                        <a href="#"> Home Appliances </a>
                        <a href="#"> Home Appliances </a>
                        <a href="#"> Home Appliances </a>
                      </div>
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/personal-care`,
                  }}
                >
                  <img
                    className="img-fluid mx-auto"
                    src="img/category/slide5.png"
                    alt="personalcare"
                  />
                  <div class="dropdown">
                    <h6 className="font-semibold dropbtn">
                      {" "}
                      Electronics
                      <i
                        class="fa fa-angle-down align-middle ml-2"
                        aria-hidden="true"
                      ></i>
                      <div class="dropdown-content">
                        <a href="#"> Home Appliances </a>
                        <a href="#"> Home Appliances </a>
                        <a href="#"> Home Appliances </a>
                        <a href="#"> Home Appliances </a>
                        <a href="#"> Home Appliances </a>
                        <a href="#"> Home Appliances </a>
                      </div>
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/household-items`,
                  }}
                >
                  <img
                    className="img-fluid  mx-auto"
                    src="img/category/slide6.jpg"
                    alt="household-imtes"
                  />
                  <div class="dropdown">
                    <h6 className="font-semibold dropbtn">
                      {" "}
                      Home
                      <i
                        class="fa fa-angle-down align-middle ml-2"
                        aria-hidden="true"
                      ></i>
                      <div class="dropdown-content">
                        <a href="#"> Home Appliances </a>
                        <a href="#"> Home Appliances </a>
                        <a href="#"> Home Appliances </a>
                      </div>
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/home-kitchen`,
                  }}
                >
                  <img
                    className="img-fluid  mx-auto"
                    src="img/category/slide7.png"
                    alt="kitchen"
                  />
                  <h6 className="font-semibold"> Appliances </h6>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/beverages`,
                  }}
                >
                  <img
                    className="img-fluid mx-auto"
                    src="img/category/slide8.png"
                    alt="beverages"
                  />
                  <h6 className="font-semibold"> Travel </h6>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/breakfast-dairy`,
                  }}
                >
                  <img
                    className="img-fluid  mx-auto"
                    src="img/category/slide9.png"
                    alt="breakfastdairy"
                  />
                  <h6 className="font-semibold">
                    {" "}
                    Beauty, Toys & More{" "}
                    <i
                      class="fa fa-angle-down align-middle"
                      aria-hidden="true"
                    ></i>{" "}
                  </h6>
                </Link>
              </div>
            </div>

            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/grocery-staples`,
                  }}
                >
                  <img
                    className="img-fluid mx-auto"
                    src="img/category/slide1.png"
                    alt="grocery-stamples"
                  />
                  <h6 className="font-semibold"> Top Offers </h6>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/personal-care`,
                  }}
                >
                  <img
                    className="img-fluid mx-auto"
                    src="img/category/slide2.png"
                    alt="personalcare"
                  />
                  <h6 className="font-semibold"> Grocery </h6>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/personal-care`,
                  }}
                >
                  <img
                    className="img-fluid mx-auto"
                    src="img/category/slide3.png"
                    alt="personalcare"
                  />
                  <h6 className="font-semibold"> Mobiles </h6>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/personal-care`,
                  }}
                >
                  <img
                    className="img-fluid mx-auto"
                    src="img/category/slide4.png"
                    alt="personalcare"
                  />
                  <h6 className="font-semibold"> Fashion </h6>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/personal-care`,
                  }}
                >
                  <img
                    className="img-fluid mx-auto"
                    src="img/category/slide5.png"
                    alt="personalcare"
                  />
                  <h6 className="font-semibold"> Electronics </h6>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/household-items`,
                  }}
                >
                  <img
                    className="img-fluid  mx-auto"
                    src="img/category/slide6.jpg"
                    alt="household-imtes"
                  />
                  <h6 className="font-semibold"> Home </h6>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/home-kitchen`,
                  }}
                >
                  <img
                    className="img-fluid  mx-auto"
                    src="img/category/slide7.png"
                    alt="kitchen"
                  />
                  <h6 className="font-semibold"> Appliances </h6>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/beverages`,
                  }}
                >
                  <img
                    className="img-fluid mx-auto"
                    src="img/category/slide8.png"
                    alt="beverages"
                  />
                  <h6 className="font-semibold"> Travel </h6>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="category-item">
                <Link
                  to={{
                    pathname: `/shop/breakfast-dairy`,
                  }}
                >
                  <img
                    className="img-fluid  mx-auto"
                    src="img/category/slide9.png"
                    alt="breakfastdairy"
                  />
                  <h6 className="font-semibold"> Beauty, Toys & More </h6>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
