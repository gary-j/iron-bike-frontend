import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  &:hover{
  ${'' /* border: 0.5px solid black;
  border-radius: 10px; */}
  transition: all 5s ease;
  bottom: 50px;
  ${'' /* need work in transition */}
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 160px;
  right: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const Title = styled.h2`
    color:#e57373;
    margin-bottom: 10px;
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
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button className="btn">SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;