import { Link } from "react-router-dom";
import styled from 'styled-components';
import { mobile } from '../Responsive';
import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import { AuthContext } from "../context/auth.context";

const Container = styled.div`
  width: 80vw;
  height: 72vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Wrapper = styled.div`
  width: 45%;
  padding: 20px;
  background-color: white;
  margin-right: 150px;
  ${mobile({ width: '75%' })}
`;

const RightBox = styled.img`
  width: 300px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 300;
  color: #12996d;
`;

const Paragraph = styled.p`
margin-top: 15px;
margin-bottom: 40px;
`;


const Success = () => {
  const {user} = useContext(AuthContext)   
  console.log(user);
 
  return (
    <div>
    <Navbar />
    <Container>
      <Wrapper>
        <Title>PAYMENT SUCCESSFUL</Title>
        <Paragraph>Thank you 
        {user &&
        <span className="SuccessUsername"> {user.username[0].toUpperCase() + user.username.slice(1)} </span> 
        }
        for your purchase</Paragraph>
        <br/>
        <Paragraph>Your order is confirmed now ! check your email: 
        {user &&
        <span className="SuccessEmail"> {user.email}</span>
        }
        </Paragraph>
        <Paragraph>You will receive a confirmation and your order will be shipped within 48h </Paragraph>
      <Link to={`/`}>
        <button className="categoryBtn">Back To Home Page</button>
        </Link>   
      </Wrapper>
      <RightBox
        src='../images/success.png'
        alt='success'
      />
    </Container>
    <Footer/>
  </div>
  );
};

export default Success;
      
      