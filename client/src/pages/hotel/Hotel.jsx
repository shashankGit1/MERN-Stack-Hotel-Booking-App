import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/Navbar/Navbar";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./hotel.css";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const { dates, options } = useContext(SearchContext);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  // const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate);
  console.log(dates);
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
                <h1>Perfect for a {days}-night stay!</h1>
                {/* <h1>Perfect for a 9-night stay!</h1> */}
                <span>Located in the real heart of Krakow</span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "}
                  nights)
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
