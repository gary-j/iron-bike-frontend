import React from "react";
import Advertisement from "../components/Advertisement";
import Features from "../components/Features";
import Footer from "../components/Footer";
import GridCategory from "../components/GridCategory";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";

const LandingPage = () => {
  return (
    <div className="LandingPage">
        <Advertisement/>
        <Navbar />
        <Wrapper />
        <GridCategory />
        <Features/>
        <Footer/>
    </div>
  );
};

export default LandingPage;
