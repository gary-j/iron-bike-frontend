import styled from "styled-components";
import { mobile } from "../Responsive";
import React from "react";
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 80vw;
  height: 72vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LeftBox = styled.div`
  width: 400px;
  padding: 20px;
  background-color: white;
  margin-right: 150px;
  ${mobile({ width: "75%" })}
`;

const RightBox = styled.img`
  width: 400px;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 300;
  margin-bottom: 60px;
  text-decoration: 3px underline #12996d;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.p`
  flex: 1;
  font-size: 30px;
  margin: 10px;
  color: black;
`;
const InfoResult = styled.span`
  font-size: 25px;
  margin: 10px;
  color: #12996d;
`;

const BrandPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <LeftBox>
          <Title>Pinarello</Title>
          <Description>
            <Info>
              Year of Foundation:
              <InfoResult>1950</InfoResult>
            </Info>
            <Info>
              Head Quarter:
              <InfoResult>Italy</InfoResult>
            </Info>
            <Info>
              Factory Location:
              <InfoResult>Italy</InfoResult>
            </Info>
          </Description>
        </LeftBox>
        <RightBox
          src="https://res.cloudinary.com/ironbike/image/upload/v1649861921/Products/Brand/Pinarello_logo.svg_pdyfmc.png"
          alt=" img of brand"
        />
      </Container>
    </div>
  );
};

export default BrandPage;
