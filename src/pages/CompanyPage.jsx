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
              src="https://ca.slack-edge.com/T033XUFUD09-U033GK6ACSH-329cd73f6141-512"
              alt="Gary"
            />
            <h2>Gary XXX</h2>
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
            Leads the daily operations at Apptopia, including product development and global sales. Jonathan is passionate about people, sports, and really efficient processes.            </p>
      </div>
      <Footer />
    </>
  );
};

export default CompanyPage;
