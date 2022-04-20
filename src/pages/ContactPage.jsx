import styled from "styled-components";
import { mobile } from "../Responsive";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
  width: 85vw;
  height: 72vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  margin-right: 150px;
  ${mobile({ width: "75%" })}
`;

const ImageBox = styled.img`
  width: 50%;
  border: 3px solid gray;
  border-radius: 10px;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  margin: revert-layer;
  text-decoration: 3px underline #12996d;
`;

const Info = styled.p`
  flex: 1;
  font-size: 30px;
  margin: 10px;
  color: #12996d;
  width: max-content;
`;
const InfoText = styled.span`
  font-size: 25px;
  margin: 10px;
  color: black;
`;

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>Contact Us</Title>
          <Desc>
            <Info>
              Managers: <InfoText>Gary & Léo</InfoText>
            </Info>
            <Info>
              Address: <InfoText>226 Bd Voltaire, 75011 Paris</InfoText>
            </Info>
            <Info>
              E-mail: <InfoText>ironbikeparis@gmail.com</InfoText>
            </Info>
          </Desc>
        </Wrapper>
        <ImageBox
          src="https://res.cloudinary.com/ironbike/image/upload/v1650404122/Main/Capture_d_e%CC%81cran_2022-04-19_a%CC%80_23.35.02_txzlrn.png"
          alt="address img"
        />
      </Container>
      <Footer />
    </div>
  );
};

export default ContactPage;
