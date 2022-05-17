import React from "react";
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Tours from "../Tours/Tours";

const Home = () => {

    return (
        <div className="">
          <div className="mb-2">
            <Banner></Banner>
          </div>
          <div className="mt-2 mb-5">
             <Tours></Tours>
          </div>
          <div className="mt-2 mb-2">
            <Services></Services>
          </div>
          <div className="mt-2 mb-2">
            <About></About>
          </div>
        </div>
    );
};

export default Home;