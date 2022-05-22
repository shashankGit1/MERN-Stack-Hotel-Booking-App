import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/Navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.css";

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    },
    {
      src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    },
  ];
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen  = (index) => {
    setSliderNumber(index);
    setOpen(true);
  }
  const handleMove = (direction) =>{
    let newSliderNum;
    if(direction==='left')
      newSliderNum = sliderNumber===0 ? 5 : sliderNumber-1;
    else
      newSliderNum = sliderNumber===5 ? 0 : sliderNumber+1;
    setSliderNumber(newSliderNum);
  }
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (<div className="slider">
          <FontAwesomeIcon icon = {faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon = {faCircleArrowLeft} className='arrow' onClick={() => handleMove("left")}/>
          <div className="sliderWrapper">
            <img src={photos[sliderNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon = {faCircleArrowRight} className="arrow" onClick={() => handleMove("right")}/>
        </div>)}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span> Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent Location 500m from City Center
          </span>
          <span className="hotelPriceHighlight">
            Complementary airport shuttle service
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper">
                <img 
                  onClick={()=>handleOpen(index)} 
                  src={photo.src} 
                  alt="" 
                  className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8! Perfect place for staycation.
                Enjoy the taste of luxury at pocket freindly tarrifs. Special
                Diwali offer rates applicable.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9 night stay!</h1>
              <span>Located in the real heart of Krakow</span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Book Now</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Hotel;
