import React,  { useState, useEffect } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import sliderImg1 from "../assets/slider1.webp";
import sliderImg2 from "../assets/slider2.webp";
import sliderImg3 from "../assets/slider3.webp";
import { motion } from "framer-motion";


const slides = [
  { id: 1, image: sliderImg1 },
  { id: 2, image: sliderImg2 },
  { id: 3, image: sliderImg3 },
];

  export default function SliderComp() {
  const [activeSlide, setActiveSlide] = useState(0); // Store active slide index
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 992);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 992);
      
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    const CustomPrevArrow = ({ onClick }) => (
        <button
          onClick={onClick}
          className="slider-control-prev"
        >
          <IoIosArrowBack size={24} className="sm:size-30" />
        </button>
      );
      
      const CustomNextArrow = ({ onClick }) => (
        <button
          onClick={onClick}
          className="slider-control-next"
        >
          <IoIosArrowForward size={24} className="sm:size-30" />
        </button>
      );
  var settings = {
    dots: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,    // Disables swipe gestures on touch devices
    draggable: false, // Disables dragging with the mouse
    autoplay: true,    // Enables auto play
    autoplaySpeed: 5000, // Auto slides every 2 seconds
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex), // Update active slide index
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={slide.id} className="slider_slide">
          <img src={slide.image} alt={`slide-${slide.id}`} />
          <div className="home-slider-caption">
            <div className="home-slider-caption-inner">
              <div className="container" style={{
                      paddingLeft: isDesktop ? (activeSlide === 1 ? "480px" : "100px") : "10px", // Apply padding if slide ID is 2
                      
                    }}>
                {/* Animate only when the slide is active */}
                {index === activeSlide && (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 1 }}
                  >
                    <div className="slider-caption-d-flex">
                      <div className="text-left">
                        <motion.div
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 2, delay: 1 }}
                        >
                          <span className="headbigtitle">AT <b>LSW,</b> YOU GET</span>
                        </motion.div>
                      </div>
                      <div className="text-left">
                        <motion.div
                          initial={{ opacity: 0, x: 100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 2.5, delay: 1 }}
                        >
                          <span className="headsmalltitle">Legal Insight. Business Instinct.</span>
                        </motion.div>
                      </div> 
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}