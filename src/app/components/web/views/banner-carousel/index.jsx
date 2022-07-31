import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from "../category";
export default class Bannerslider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <div>
        <Category />
        <Slider {...settings}>
          <div className="owl-item">
            <img src="img/banners/banner1.jpeg" alt="supermarket" />
          </div>
          <div className="owl-item">
            <img src="img/banners/banner2.jpg" alt="supermarket" />
          </div>
          <div className="owl-item">
            <img src="img/banners//banner3.jpeg" alt="supermarket" />
          </div>
          <div className="owl-item">
            <img src="img/banners/banner4.jpg" alt="supermarket" />
          </div>
          <div className="owl-item">
            <img src="img/banners/banner5.jpg" alt="supermarket" />
          </div>
          <div className="owl-item">
            <img src="img/banners//banner6.jpg" alt="supermarket" />
          </div>
          <div className="owl-item">
            <img src="img/banners//banner7.jpg" alt="supermarket" />
          </div>
        </Slider>
      </div>
    );
  }
}
