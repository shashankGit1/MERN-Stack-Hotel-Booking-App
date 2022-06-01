import React from 'react'
import Featured from '../../components/featured/Featured';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Navbar from '../../components/Navbar/Navbar';
import PropertyList from '../../components/propertyList/PropertyList';
import './home.css'
import axios from 'axios';

const Home = () => {
  // React.useEffect(()=>{
  //   axios.get('http://localhost:8800/api/hotels/countByCity?cities=berlin,madrid').then(
  //     (res)=>{
  //       console.log(res);
  //     }
  //   )
  // })
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
            <Featured />
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Homes guest love</h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/>
        </div>
    </div>
  )
}

export default Home;