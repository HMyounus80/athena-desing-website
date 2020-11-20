import React from 'react';
import './home.css';
import Achievements from '../Achievements/Achievements';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import StayProject from '../StayProject/StayProject';


const Home = () => {
    return (

        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <Services></Services>
            <StayProject></StayProject>
            <Achievements></Achievements>
            <Pricing></Pricing>
            <ContactUs></ContactUs>
            <Footer></Footer>
            
         
        
        </div>
    );
};

export default Home;