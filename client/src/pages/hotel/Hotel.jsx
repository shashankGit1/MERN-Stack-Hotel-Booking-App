import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/Navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const [sliderNumber, setSliderNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = (index) => {
    setSliderNumber(index);
    setOpen(true);
  }
  const handleMove = (direction) => {
    let newSliderNum;
    if (direction === 'left')
      newSliderNum = sliderNumber === 0 ? 5 : sliderNumber - 1;
    else
      newSliderNum = sliderNumber === 5 ? 0 : sliderNumber + 1;
    setSliderNumber(newSliderNum);
  }

  // const photos = [
  //   {
  //     src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
  //   },
  //   {
  //     src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  //   },
  // ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? ("loading, please wait") :
        (<div className="hotelContainer">
          {open && (<div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={() => setOpen(false)} />
            <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={() => handleMove("left")} />
            <div className="sliderWrapper">
              <img src={data.photos[sliderNumber]} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={() => handleMove("right")} />
          </div>)}
          <div className="hotelWrapper">
            <button className="bookNow">Reserve or Book Now!</button>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span> {data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent Location {data.distance} from City Center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay here at just {data.cheapestPrice}.
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, index) => (
                <div className="hotelImgWrapper">
                  <img
                    onClick={() => handleOpen(index)}
                    src={photo}
                    alt=""
                    className="hotelImg" />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">
                  {data.desc}
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
          <MailList />
          <Footer />
        </div>)}
    </div>
  );
};

export default Hotel;
