import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisement";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import { mobile } from "../Responsive";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {



  return (
    <Container>
      <Navbar />
      <Advertisement />
      <Title>ALL Brands</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter By Category:</FilterText>
          <Select>
            <Option disabled selected>
              Category
            </Option>
            <Option>Bikes</Option>
            <Option>Accessory</Option>
            <Option>Clothes</Option>
            <Option>Nutrition</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Link to="/brand" className="Link">
        <Brands />
      </Link>
      <Footer />
    </Container>
  );
};

export default ProductList;
