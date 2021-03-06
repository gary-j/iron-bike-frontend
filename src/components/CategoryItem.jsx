import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  ${mobile({ marginTop: "50px" })}

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
  text-decoration: 3px underline #12996d;
  margin-bottom: 10px;
  color: black;
  text-align: center;
`;

const Button = styled.button`
  background-color: transparent;
  width: 130px;
  font-size: 13px;
  padding: 10px;
  border: none;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.categories}`} className='linkItem'>
        <Title>{item.title}</Title>
        <Image src={item.img} />
      <Info>
          <Button className="btn">{item.categories}</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
