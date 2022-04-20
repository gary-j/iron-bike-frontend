import { mobile } from '../Responsive';
import styled from 'styled-components';
import Advertisement from '../components/Advertisement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cart.context';

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  text-decoration: 3px underline #12996d;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const TopButton = styled.button`
  padding: 13px;
  margin: 9px 30px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 183;
  font-size: small;
  width: max-content;
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const Info = styled.div`
  flex: 3;
`;

const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const ItemQtyAndPrice = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductText = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Quantity = styled.div`
  font-size: 24px;
  margin: 15px;
  ${mobile({ margin: '5px 15px' })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
  border: 0.5px solid #d3d3d3;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  text-decoration: 3px underline #12996d;
  font-weight: 200;
  margin-bottom: 15px;
`;

const SummaryItem = styled.div`
  margin: 15px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 4px 5px;
  border: none;
  background: transparent;
  font-weight: 600;
`;

const ShoppingCart = () => {
  const {
    addOneToCart,
    removeOneToCart,
    cartCount,
    cartArray,
    setCartArray,
    getSubTotal,
    getTotalToPay,
  } = useContext(CartContext);
  // const [product, setProduct] = useState({});
  // const [productQty, setProductQty] = useState(0);
  // const checkQuantity = () => {
  //   setProductQty(productQty <= 0 ? 0 : productQty - 1);
  // };

  console.log(cartArray, 'CART ARRAY');
  //
  return (
    <Container>
      <Navbar />
      <Advertisement />
      <Wrapper>
        <Title>Your shopping cart</Title>
        <Top>
          <Link to='/products' className='Link'>
            <TopButton className='btn'>CONTINUE SHOPPING</TopButton>
          </Link>
          <TopTexts>
            <TopText>Shopping Bag({cartCount})</TopText>
          </TopTexts>
          <Link to='/' className='Link'>
            <TopButton className='btn'>HOME PAGE</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {cartArray.map((item) => {
              return (
                <div key={item?._id}>
                  <ProductRow>
                    <ItemQtyAndPrice>
                      <Image src={item?.image} />
                      <Details>
                        <ProductText>
                          <b>Product: {item?.productName}</b>
                        </ProductText>
                        <ProductText>
                          <b>Unit price: {item?.price.toFixed(2)} €</b>
                        </ProductText>
                        {item?.color && (
                          <ProductText>
                            <b>Color:</b> {item?.color}
                          </ProductText>
                        )}
                        {item?.size && (
                          <ProductText>
                            <b>Size:</b> {item?.size}
                          </ProductText>
                        )}
                        {item?.flavor && (
                          <ProductText>
                            <b>Flavor:</b> {item?.flavor}
                          </ProductText>
                        )}
                      </Details>
                    </ItemQtyAndPrice>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <button
                          className='removeOne'
                          onClick={(e) => removeOneToCart(e, item)}>
                          <RemoveCircleOutlineOutlinedIcon className='removeOne' />
                        </button>
                        <Quantity>{item.quantityInCart}</Quantity>
                        <button
                          className='addOne'
                          onClick={(e) => addOneToCart(e, item)}>
                          <AddCircleOutlineOutlinedIcon />
                        </button>
                      </ProductAmountContainer>
                      <ProductPrice>
                        {(item.price * item.quantityInCart).toFixed(2)} €
                      </ProductPrice>
                    </PriceDetail>
                  </ProductRow>
                  <Hr />
                </div>
              );
            })}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>subtotal</SummaryItemText>
              <SummaryItemPrice>{getSubTotal()} €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Free worldwide shipping</SummaryItemText>
              {/* <SummaryItemPrice>0 €</SummaryItemPrice> */}
            </SummaryItem>
            <SummaryItem>
              <div>
                <label>Discount</label>
                <input type='text' name='' id=''></input>
              </div>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>{getTotalToPay()}</SummaryItemPrice>
            </SummaryItem>
            <Link to='/stripeLink' className='Link'>
              <Button className='btn'>CHECKOUT NOW</Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ShoppingCart;
