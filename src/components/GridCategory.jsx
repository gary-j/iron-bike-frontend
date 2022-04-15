import styled from "styled-components";
import { categories } from "../dataTest";
import { mobile } from "../Responsive";
import React from "react";
import CategoryItem from "./CategoryItem";

const GridCategory = () => {
  const Container = styled.div`
    display: flex;
    padding: 20px;
    margin-bottom: 50px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: "column" })}
  `;

  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default GridCategory;
