import styled from "styled-components";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Advertisement from "../components/Advertisement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../Responsive";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestAxios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  margin-right: 50px;
`;

const Image = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
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

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
`;

const Button = styled.button`
  padding: 20px;
  margin: 4px 5px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 500;
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

const Product = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/" + slug);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [slug]);

  return (
    <Container>
      <Navbar />
      <Advertisement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.productName}</Title>
          <Description>
            <Info>
              Color: <InfoResult>{product.color}</InfoResult>
            </Info>
            <Info>
              Size: <InfoResult>{product.size}</InfoResult>
            </Info>
            <Info>
              Weight: <InfoResult>{product.weight} Kg</InfoResult>
            </Info>
            <Info>
              Price: <InfoResult>{product.price} €</InfoResult>
            </Info>
          </Description>
          <AddContainer>
            <AmountContainer>
              <RemoveCircleOutlineOutlinedIcon />
              <Amount>1</Amount>
              <AddCircleOutlineOutlinedIcon />
            </AmountContainer>
            <Button className="btn">ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
