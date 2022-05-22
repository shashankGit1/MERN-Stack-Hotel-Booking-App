import React from 'react'
import './featuredProperties.css';
const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" alt="" className="fpImg" />
                <span className="fpName">Apartment</span>
                <span className="fpCity">City</span>
                <span className="fpPrice">500</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Ecellent</span>
                </div>
                
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" alt="" className="fpImg" />
                <span className="fpName">Apartment</span>
                <span className="fpCity">City</span>
                <span className="fpPrice">500</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Ecellent</span>
                </div>
                
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" alt="" className="fpImg" />
                <span className="fpName">Apartment</span>
                <span className="fpCity">City</span>
                <span className="fpPrice">500</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Ecellent</span>
                </div>
                
            </div>
        </div>

    )
}

export default FeaturedProperties