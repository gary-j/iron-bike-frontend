import styled from 'styled-components';
import { mobile } from '../Responsive';
import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 80vw;
  height: 72vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  margin-right: 150px;
  ${mobile({ width: '75%' })}
`;

const RightBox = styled.img`
  width: 300px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  margin-top: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 15vw;
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: gray;
`;

const SignupPage = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>SIGN UP</Title>
          <Form>
            <Input placeholder='username' />
            <Input placeholder='email' />
            <Input placeholder='password' />
            <Button className='btn'>CONFIRM</Button>
            <Link to={'/login'}>
              <Links>ALREADY YOU HAVE AN ACCOUNT ?</Links>
            </Link>
          </Form>
        </Wrapper>
        <RightBox
          src='https://res.cloudinary.com/ironbike/image/upload/v1650037531/Main/bike_ys6xgn.png'
          alt=''
        />
      </Container>
    </div>
  );
};

export default SignupPage;
