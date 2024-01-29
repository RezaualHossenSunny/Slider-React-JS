import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import thre from '../assets/3.png'
export const Cursol = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={one}/>
          </div>
          <div>
          <img src={two}/>
          </div>
          <div>
          <img src={thre}/>
          </div>
          <div>
          <img src={one}/>
          </div>
          <div>
          <img src={thre}/>
          </div>
          <div>
          <img src={one}/>
          </div>
        </Slider>
      </div>
  )
}
