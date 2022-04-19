import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 220px;
  right: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Title = styled.h2`
  color: #404040;
  margin-bottom: 10px;
  text-decoration: 3px underline #4d4b4b;
`;

const Button = styled.button`
  background-color: transparent;
  width: 130px;
  font-size: 10px;
  padding: 10px;
  border: none;
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Title>{item.title}</Title>
      <Image src={item.img} />
      <Info>
      <Link to={`/products/${item.categories}`}>
        <Button className="btn">SHOP NOW</Button>
      </Link>
      </Info>
    </Container>
  );
};

export default CategoryItem;
