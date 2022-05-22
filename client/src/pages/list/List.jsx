import React from 'react';
import Header from '../../components/header/Header'
import Navbar from '../../components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import './list.css'
import { useState } from 'react';
import format from 'date-fns/format';
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem.jsx';
const List = () => {
    const location = useLocation();
    // console.log(location);
    const [destination, setDestination] = useState(location.state.destination);
    const [options, setOptions] = useState(location.state.options);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);


    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label>Destination</label>
                            {/* <span>{destination}</span> */}
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className="lsItem">
                            <label>Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (<DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                            />)}
                        </div>
                        <div className="lsItem">
                            <label className='lsOptions'>Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Min Price <small>(per night)</small></span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Max Price <small>(per night)</small></span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adults</span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.adult} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Children</span>
                                    <input type="number" min={0} className="lsOptionInput" placeholder={options.children} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Rooms </span>
                                    <input type="number" min={1} className="lsOptionInput" placeholder={options.room} />
                                </div>
                            </div>
                        </div>
                        <button className="search">Search</button>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List;