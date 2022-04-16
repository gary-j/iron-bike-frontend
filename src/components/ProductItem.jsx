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
  border: 0.5px solid black;
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
    ${'' /* background-color: #e9f5f5; */}
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
    </Container>
  );
};

export default Product;
