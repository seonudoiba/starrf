import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import HelloUser from '../components/Route/Hero/HelloUser';
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
// import Events from "../components/Events/Events";
// import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <HelloUser username="Abiodun."/>
        {/* <Hero /> */}
        <BestDeals />
        <FeaturedProduct />
        <Categories />
        <Footer /> 
         {/* 
        
        <Events />
        
        <Sponsored />
         */}
    </div>
  )
}

export default HomePage