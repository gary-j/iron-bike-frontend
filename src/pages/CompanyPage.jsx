import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CompanyPage = () => {
  return (
    <>
      <div className="NavbarProductsList">
        <Navbar />
      </div>
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
          Gary & Léo tow funny dev, creative and motivated by challenge. For
          only one week the succeed to build a strong E-commerce App with a
          beautiful font-end design and strong Api with many options Together
          they lived a great experience 'Team Spirit' to reach all the
          requirement for the final Project We hope you enjoy visiting our web
          site. Cheers ✌️{" "}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default CompanyPage;
