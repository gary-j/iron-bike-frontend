import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import { wrapperList } from "../dataTest";
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Slider = styled.div`
  height: 100%;
  display: flex;
  transition: all 2s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div`
  flex: 1;
  ${'' /* height:100%; */}
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  border:1px;
  border-radius: 10px;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Wrapper = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
<Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowCircleLeftOutlinedIcon sx={{color: '#12996d'}}/>
      </Arrow>
      <Slider slideIndex={slideIndex}>
        {wrapperList.map((item) => (
          <Slide  key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.description}</Desc>
              <Link to="/products" className='Link'>
              <Button className='btn'>SHOP NOW</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Slider>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowCircleRightOutlinedIcon sx={{color: '#12996d'}}/>
      </Arrow>
    </Container>  )
}

export default Wrapper