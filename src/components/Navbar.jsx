import React from 'react';
import { Badge } from '@material-ui/core';
import styled from 'styled-components';
import { mobile } from '../Responsive';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/cart.context';
import { AuthContext } from '../context/auth.context';

const Container = styled.div`
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 1px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Flag = styled.img`
  height: 27px;
  width: 27px;
  background-size: cover;
`;

const SearchContainer = styled.div`
  border: 0.5px solid #d3d3d3;
  border-radius: 3px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  ${'' /* flex: 1; */}
  text-align: center;
`;

const Logo = styled.img`
  width: 200px;
  background-size: cover;
  ${mobile({ width: '80px', height: '80px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const Navbar = () => {
  const { cartCount } = useContext(CartContext);
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  const Navigate = useNavigate();
  //
  return (
    <Container>
      <Wrapper>
        <Left>
          <Flag src='https://res.cloudinary.com/ironbike/image/upload/v1650010645/Logo/united-kingdom_g7bjfr.png'></Flag>
          <SearchContainer>
            <Input placeholder='Search' />
            <SearchOutlinedIcon style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to='/' className='Link'>
            <Logo
              src='https://res.cloudinary.com/ironbike/image/upload/v1649979569/Logo/Capture_d_e%CC%81cran_2022-04-15_a%CC%80_01.38.40_dmoy47.png'
              alt='logo'></Logo>
          </Link>
        </Center>
        {!isLoggedIn && (
          <>
            <Right>
              <Link to='/login' className='Link'>
                <MenuItem>LOG IN</MenuItem>
              </Link>
              <Link to='/signup' className='Link'>
                <MenuItem>SIGN UP</MenuItem>
              </Link>
              <Link to='/shoppingcart' className='Link cart-icon'>
                <MenuItem>
                  <Badge badgeContent={cartCount} color='primary'>
                    <ShoppingCartTwoToneIcon sx={{ color: '#12996d' }} />
                  </Badge>
                </MenuItem>
              </Link>
            </Right>
          </>
        )}
        {isLoggedIn && (
          <Right>
            <MenuItem
              onClick={() => {
                logOutUser();
                Navigate('/');
              }}>
              LOG OUT
            </MenuItem>
            <Link to='/shoppingcart' className='Link cart-icon'>
              <MenuItem>
                <Badge badgeContent={cartCount} color='primary'>
                  <ShoppingCartTwoToneIcon sx={{ color: '#12996d' }} />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
