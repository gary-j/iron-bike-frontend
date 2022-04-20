import styled from "styled-components";
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../Responsive";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Button } from "@material-ui/core";

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
        {(cat === "Bikes" || cat === "Nutrition" || cat === "Clothes" || cat === "Accessory") &&
          <FilterText>Filter Products:</FilterText>
        }
        {(!cat) &&
        <>

        <Link to={`/products/Bikes`}>
        <Button className="btn">Bikes</Button>
        </Link>
        <Link to={`/products/Clothes`}>
        <Button className="btn">Clothes</Button>
        </Link>
        <Link to={`/products/Accessory`}>
        <Button className="btn">Accessory</Button>
        </Link>
        <Link to={`/products/Nutrition`}>
        <Button className="btn">Nutrition</Button>
        </Link>
        </>
        }
          {(cat === "Bikes") &&
          <Select name="categoryBike" onChange={handleFilter}>
            <Option  value={''}>Category</Option>
            <Option>Road Bike</Option>
            <Option>Mountain Bike</Option>
            <Option>City Bike</Option>
            <Option>E-Bike</Option>
          </Select>
          }
          {(cat === "Nutrition") &&
          <Select name="aspect" onChange={handleFilter}>
            <Option value={''}>Aspect</Option>
            <Option>Bars</Option>
            <Option>Gels</Option>
            <Option>Drinks</Option>
            <Option>Energy Meals</Option>
          </Select>
          }
          {(cat === "Bikes") &&
          <Select name="frameMaterials" onChange={handleFilter}>
            <Option  value={''}>Frame</Option>
            <Option>Aluminum</Option>
            <Option>Carbon</Option>
            <Option>Titanium</Option>
          </Select>
          }
          {(cat === "Clothes") &&
          <Select name="sexCategory" onChange={handleFilter}>
            <Option value={''}>Gender</Option>
            <Option>Men</Option>
            <Option>Women</Option>
          </Select>
          }
          {(cat === "Clothes") &&
          <Select name="type" onChange={handleFilter}>
            <Option value={''}>Type</Option>
            <Option>Helmets</Option>
            <Option>Jerseys</Option>
            <Option>Trousers</Option>
            <Option>Shoes</Option>
            <Option>Glasses</Option>
          </Select>
          }
          {(cat === "Clothes"|| cat === "Bikes") &&
          <Select name="color" onChange={handleFilter}>
            <Option value={''}>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Orange</Option>
          </Select>
          }
          {(cat === "Clothes"|| cat === "Bikes") &&
          <Select name="size" onChange={handleFilter}>
            <Option value={''}>Size</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          }
          {(cat === "Accessory") &&
          <Select name="features" onChange={handleFilter}>
            <Option value={''}>Features</Option>
            <Option>GPS</Option>
            <Option>Bluetooth</Option>
            <Option>Heart Rate Monitor</Option>
            <Option>Wireless</Option>
          </Select>
          }
          {(cat === "Nutrition") &&
          <Select name="vegan" onChange={handleFilter}>
            <Option value={''}>Vegan</Option>
            <Option>Yes</Option>
            <Option>None</Option>
          </Select>
          }
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