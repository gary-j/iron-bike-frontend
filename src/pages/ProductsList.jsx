import styled from "styled-components";
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../Responsive";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  color: black;
  text-decoration: 3px underline #12996d;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
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

  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilter = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value 
    })
    console.log(value)
  } 

  return (
    <Container>
      <Navbar />
      <Advertisement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="category" onChange={handleFilter}>
            <Option>All Categories</Option>
            <Option>Bikes</Option>
            <Option>Accessory</Option>
            <Option>Clothes</Option>
            <Option>Nutrition</Option>
          </Select>
          <Select name="size" onChange={handleFilter}>
            <Option> All Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort By Price:</FilterText>
          <Select onChange={(e)=> setSort(e.target.value)}>
            <Option defaultValue="price" value="price">Price</Option>
            <Option value="high">Price (High)</Option>
            <Option value="low">Price (Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Link to="/product" className='linkItem'>
      <Products cat={cat} filters={filters} sort={sort}/>
      </Link>
      <Footer />
    </Container>
  );
};

export default ProductList;