import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import  { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import Sidebar from "../../img/Quiz Application.png";
import Ecommerce from "../../img/Todo list.png";
import HOC from "../../img/Healthcare.jpg";
import MusicApp from "../../img/rockpaperscissors.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
   
      <Swiper
      modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        className="portfolio-slider"
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
      
    </div>
  );
};

export default Portfolio;
