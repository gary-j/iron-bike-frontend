import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CompanyPage = () => {
  return (
    <>
      <Navbar />
      <div className="CompanyPage">
        <h1 className="title">Project contributed by</h1>
        <div className="container">
          <div className="profile">
            <img
              className="imgProfile"
              src="https://res.cloudinary.com/ironbike/image/upload/v1650474996/Main/Gary-J-no-background-round_xth5qm.png"
              alt="Gary"
            />
            <h2>Gary Jesoph</h2>
          </div>
          <div className="profile">
            <img
              className="imgProfile"
              src="https://res.cloudinary.com/ironbike/image/upload/v1650403261/Main/leo_qdnjwj.png"
              alt="Léo"
            />
            <h2>Léo Cheffi</h2>
          </div>
        </div>
        <p className="descPage">
          Leads the daily operations at Apptopia, including product development
          and global sales. Jonathan is passionate about people, sports, and
          really efficient processes.{" "}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default CompanyPage;
