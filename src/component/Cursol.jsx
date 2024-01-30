import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import one from '../assets/1.jpg'
import two from '../assets/2.jpg'
import thre from '../assets/3.png';


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}


export const Cursol = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      
    ]
  };
  return (
    <div className='container'>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src={one}  className='w-50' />
          </div>
          <div>
          <img src={two} className='w-50'/>
          </div>
          <div>
          <img src={thre} className='w-100'/>
          </div>
          <div>
          <img src={two} className='w-50'/>
          </div>
          <div>
          <img src={thre} className='w-100'/>
          </div>
          <div>
          <img src={two} className='w-50'/>
          </div>
         
        </Slider>
      </div>
  )
}
