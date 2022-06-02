import React from "react";
import "./header.css";
import {
    faBed,
    faPlane,
    faCar,
    faTaxi,
    faCalendar,
    faCalendarDays,
    faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useContext } from "react";
import { Calendar, DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";


const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);

    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });
    const handleOptionCounter = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "increase" ? options[name] + 1 : options[name] - 1,
            };
        });
    };
    const navigate = useNavigate();
    const {dispatch} = useContext(SearchContext);
    const handleSearch = ()=>{
        console.log(dates);
        dispatch({type:"NEW_SEARCH", payload:{destination, dates, options}})
        navigate("/hotels", {state:{destination, dates, options}});
    }
    return (
        <div className="header">
            <div className={type==="list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                {type !== "list" && 
                    <>
                        <h1 className="headerTitle"> A lifetime of discounts? It's Genius. </h1>
                        <p className="headerDesc">
                            Get rewarded for your travels - Unlock instant savings of 10% or more
                            with a free Booking.com account
                        </p>
                        <button className="headerBtn">Sign In/ Register</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                                <input
                                    type="text"
                                    placeholder="Where are you going?"
                                    className="headerSearchInput"
                                    onChange={e=>setDestination(e.target.value)}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                                <span
                                    onClick={() => {
                                        setOpenDate(!openDate);
                                        setOpenOptions(false)
        
                                    }}
                                    className="headerSearchText"
                                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                                    dates[0].endDate,
                                    "MM/dd/yyyy"
                                )}`}</span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDates([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        minDate={new Date()}
                                        ranges={dates}
                                        className="date"
                                    />
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                                <span
                                    className="headerSearchText"
                                    onClick={() => {
                                        setOpenOptions(!openOptions);
                                        setOpenDate(false);
                                    }}
                                >{`${options.adult} Adults • ${options.children} Children • ${options.room} Room`}</span>
                                {openOptions && (<div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adult</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" disabled={options.adult <= 1} onClick={() => handleOptionCounter("adult", "decrease")}> - </button>
                                            <span className="optionCounterNumber">{options.adult}</span>
                                            <button className="optionCounterButton" onClick={() => handleOptionCounter("adult", "increase")}> + </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Children</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" disabled={options.children <= 0} onClick={() => handleOptionCounter("children", "decrease")}> - </button>
                                            <span className="optionCounterNumber">{options.children}</span>
                                            <button className="optionCounterButton" onClick={() => handleOptionCounter("children", "increase")}> + </button>
                                        </div>
                                    </div>
                                    <div className="optionItem">
                                        <span className="optionText">Rooms</span>
                                        <div className="optionCounter">
                                            <button className="optionCounterButton" disabled={options.room <= 1} onClick={() => handleOptionCounter("room", "decrease")}> - </button>
                                            <span className="optionCounterNumber">{options.room}</span>
                                            <button className="optionCounterButton" onClick={() => handleOptionCounter("room", "increase")}> + </button>
                                        </div>
                                    </div>
                                </div>)}
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerBtn" onClick={()=>{
                                    setOpenOptions(false);
                                    setOpenDate(false);
                                    handleSearch();
                                    //space for adding other onclick functions
                                }}>Search</button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div >
    );
};

export default Header;
