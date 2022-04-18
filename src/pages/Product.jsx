import styled from "styled-components";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Advertisement from "../components/Advertisement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { mobile } from "../Responsive";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestAxios";
import { useContext } from "react";
import { CartContext } from "../context/cart.context";

const Container = styled.div``;

const ProductContainer = styled.div`
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

const AddtoCartContainer = styled.div`
  border: 2px solid blue;

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

const Quantity = styled.span`
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
  const { addOneToCart, removeOneToCart } = useContext(CartContext);
  const [productQty, setProductQty] = useState(0);
  const checkQuantity = () => {
    setProductQty(productQty <= 0 ? 0 : productQty - 1);
  };
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/" + slug);
        console.log(res.data, "LE PRODUIT");
        setProduct(res.data);
      } catch (e) {
        console.log(e);
        //redirect ou appel composant errorPage
      }
    };
    getProduct();
  }, [slug]);

  return (
    <Container>
      <Navbar />
      <Advertisement />
      <ProductContainer>
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
          <AddtoCartContainer>
            <AmountContainer>
              <button className="removeOne">
                <RemoveCircleOutlineOutlinedIcon
                  className="removeOne"
                  onClick={(e) => {
                    removeOneToCart(e, product);
                    // setProductQty(productQty - 1);
                    checkQuantity();
                  }}
                />
              </button>
              <Quantity>{productQty}</Quantity>
              <AddCircleOutlineOutlinedIcon
                onClick={(e) => {
                  addOneToCart(e, product);
                  setProductQty(productQty + 1);
                }}
              />
            </AmountContainer>
            <Link to="/shoppingcart" className="Link cart-icon">
              <Button
                className="btn"
                onClick={(e) => {
                  addOneToCart(e, product);
                  setProductQty(productQty + 1);
                }}
              >
                ADD TO CART
              </Button>
            </Link>
          </AddtoCartContainer>
        </InfoContainer>
      </ProductContainer>
      <Footer />
    </Container>
  );
};

export default Product;
