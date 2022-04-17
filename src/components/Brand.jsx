import React from "react";
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

const Image = styled.img`
  height: 10%;
  z-index: 2;
  background-color: white;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Brand = ({ item }) => {
  return (
    <Container>
      <Image src={item.brandLogo} />
    </Container>
  );
};

export default Brand;
