import React from "react";
import Advertisement from "../components/Advertisement";
import GridCategory from "../components/GridCategory";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      {/* <nav> */}
        <Navbar />
      {/* </nav> */}
      {/* <main> */}
        <Wrapper />
        <Advertisement/>
        <GridCategory />
      {/* </main> */}
    </div>
  );
};

export default LandingPage;
