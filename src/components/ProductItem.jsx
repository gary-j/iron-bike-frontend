import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 4px solid #bdbdbd21;
  border-radius: 10px;
`;

const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
  background-color: white;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <>
      <Link to={`/product/${item._id}`}>
        <Container>
          <Circle />
          <Image src={item.image} />
        </Container>
      </Link>
    </>
  );
};

export default Product;
