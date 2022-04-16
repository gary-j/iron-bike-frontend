import React from 'react'
import styled from "styled-components";
import LoyaltyIcon from '@mui/icons-material/Loyalty';

const Container = styled.div`
  height: 50px;

  width:100%;
  margin: auto;
  border : 1px solid #d32f2f;
  border-radius: 5px;
  background-color: #d32f2f;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;
const Advertisement = () => {
  return (
    <Container className='ShowTime'> 10% Discount On Orders Over 500€ <LoyaltyIcon className='LoyaltyIcon'/></Container>
  )
}

export default Advertisement


