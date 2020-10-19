import React from 'react';
import AwesomeService from '../AwesomeService/AwesomeService';
import BrandIcon from '../BrandIcon/BrandIcon';
import Carousel from '../Carousel/Carousel';
import Header from '../Header/Header';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="container">
            <Header></Header>
            <BrandIcon></BrandIcon>
            <AwesomeService></AwesomeService>
            <Carousel></Carousel>
            <FeedBack></FeedBack>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;