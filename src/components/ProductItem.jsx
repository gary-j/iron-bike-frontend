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
  ${'' /* border: 4px solid #bdbdbd21; 
  border-radius: 10px; */}
`;

const Image = styled.img`
  height: 80%;
  background-color: transparent;
  margin: 10px;
  transition: all 1.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <>
      <Container>
        <Link className="linkItem" to={`/product/${item.slug}`}>
          <Image src={item.image} />
        </Link>
      </Container>
    </>
  );
};

export default Product;
