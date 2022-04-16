import React from "react";
import { mobile } from "../Responsive";
import styled from "styled-components";
import Advertisement from "../components/Advertisement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
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
  padding: 15px;
  background: transparent;
  border: none;
  font-weight: 300;
  cursor: pointer;
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
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

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

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

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 15px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
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
  border: 0.5px solid #D3D3D3;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
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
  return (
    <Container>
      <Navbar />
      <Advertisement />
      <Wrapper>
        <Title>Your shopping cart</Title>
        <Top>
        <Link to="/products" className='Link'>
          <TopButton className="btn">CONTINUE SHOPPING</TopButton>
        </Link>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
          </TopTexts>
          <Link to="/" className='Link'>
          <TopButton className="btn">HOME PAGE</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://res.cloudinary.com/ironbike/image/upload/v1649969273/Products/Bike/MTB/FOCUS_Jam_6_8_wei__grau_600x600_kclqtz.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> FOCUS Jam 6
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddCircleOutlineOutlinedIcon />
                  <ProductAmount>1</ProductAmount>
                  <RemoveCircleOutlineOutlinedIcon />
                </ProductAmountContainer>
                <ProductPrice> 2130 €</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://res.cloudinary.com/ironbike/image/upload/v1649846404/Products/Nutrition/Drinks/POWERBAR_5_ELECTROLYTES_Pack_of_12_Anti-cramp_Drink_Tubes_Tubes_of_10_Tablets_r3qgkf.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> POWERBAR 5 ELECTROLYTES
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 938182123
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddCircleOutlineOutlinedIcon />
                  <ProductAmount>3</ProductAmount>
                  <RemoveCircleOutlineOutlinedIcon />
                </ProductAmountContainer>
                <ProductPrice>80 €</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>2210 €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>0 €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>0 €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>2210 €</SummaryItemPrice>
            </SummaryItem>
            <Link to="/stripeLink" className='Link'>
            <Button className="btn">CHECKOUT NOW</Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ShoppingCart;
