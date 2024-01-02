import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialComponent from "./Testimonial";

const SimpleSlider = () => {
    const [slider, setSlider] = useState(null);
  
    useEffect(() => {
      const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 20

      };
  
      const slickSlider = document.getElementById("slick-slider");
      if (slickSlider) {
        setSlider(window.$(slickSlider).slick(sliderSettings));
      }
  
      return () => {
        if (slider) {
          slider.unslick();
        }
      };
    }, [slider]);
  
    return (
      <div className="mt-10 pt-10 bg-teal-100">
        <Slider id="slick-slider">
          <div className="h-80">
<TestimonialComponent/>
          </div>
          <div className="h-80">
<TestimonialComponent/>
        
          </div>
         
        </Slider>
      </div>
    );
  };
  
  export default SimpleSlider;