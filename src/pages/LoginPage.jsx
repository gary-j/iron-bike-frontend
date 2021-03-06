import styled from 'styled-components';
import { mobile } from '../Responsive';
import React from 'react';
import Navbar from '../components/Navbar';

import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { publicRequest } from '../requestAxios';

const Container = styled.div`
  width: 80vw;
  height: 72vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${mobile({ width: '100vw', height: '100vh' })}
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  margin-right: 150px;
  ${mobile({ width: '100vw', height: '66vh' })}
`;

const RightBox = styled.img`
  width: 300px;
  ${mobile({ display: 'none' })}
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
  ${mobile({ width: '40vw' })}
`;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  color: gray;
`;

const LoginPage = (props) => {
  const { storeToken, authenticateUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    publicRequest
      .post(`/auth/login`, requestBody)
      .then((response) => {
        // console.log('JWT RETURNED', response.data);
        console.log(response, 'then response');

        storeToken(response.data.authToken);
        authenticateUser();

        navigate('/');
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };
  return (
    <div>
      <div className='NavbarProductsList'>
        <Navbar />
      </div>
      <Container>
        <Wrapper>
          <Title>LOG IN</Title>
          <Form onSubmit={handleLoginSubmit}>
            <Input
              placeholder='email'
              type='text'
              name='email'
              value={email}
              onChange={handleEmail}
            />
            <Input
              placeholder='password'
              type='password'
              name='password'
              value={password}
              onChange={handlePassword}
            />
            {errorMessage && <p className='error-message'>{errorMessage}</p>}
            <Button type='submit' className='btn'>
              SUBMIT
            </Button>
            <Link to={'/contact'}>
              <Links>DO NOT YOU REMEMBER THE PASSWORD?</Links>
            </Link>
            <Link to={'/signup'}>
              <Links>CREATE A NEW ACCOUNT</Links>
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

export default LoginPage;
