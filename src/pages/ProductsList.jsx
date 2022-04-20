import styled from "styled-components";
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../Responsive";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import BikeCategorySelect from "../components/filters/BikeCategorySelect";
import AspectSelect from "../components/filters/AspectSelect";
import FrameMaterialsSelect from "../components/filters/FrameMaterialsSelect";
import GenderSelect from "../components/filters/GenderSelect";
import TypeClothesSelect from "../components/filters/TypeClothesSelect";
import ColorSelect from "../components/filters/ColorSelect";
import SizeSelect from "../components/filters/SizeSelect";
import FeaturesSelect from "../components/filters/FeaturesSelect";
import VeganSelect from "../components/filters/VeganSelect";

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
        <div className="divBtn">
        <Link to={`/products/Bikes`}>
        <button className="categoryBtn">Bikes</button>
        </Link>
        <Link to={`/products/Clothes`}>
        <button className="categoryBtn">Clothes</button>
        </Link>
        <Link to={`/products/Accessory`}>
        <button className="categoryBtn">Accessory</button>
        </Link>
        <Link to={`/products/Nutrition`}>
        <button className="categoryBtn">Nutrition</button>
        </Link>
        </div>
        }
          {(cat === "Bikes") &&
          <BikeCategorySelect handleFilter={handleFilter}/>
          }
          {(cat === "Nutrition") &&
          <AspectSelect handleFilter={handleFilter}/>
          }
          {(cat === "Bikes") &&
          <FrameMaterialsSelect handleFilter={handleFilter}/>
          }
          {(cat === "Clothes") &&
          <GenderSelect handleFilter={handleFilter}/>
          }
          {(cat === "Clothes") &&
          <TypeClothesSelect handleFilter={handleFilter}/>
          }
          {(cat === "Clothes"|| cat === "Bikes") &&
         <ColorSelect handleFilter={handleFilter}/>
          }
          {(cat === "Clothes"|| cat === "Bikes") &&
          <SizeSelect handleFilter={handleFilter}/>
          }
          {(cat === "Accessory") &&
          <FeaturesSelect handleFilter={handleFilter}/>
          }
          {(cat === "Nutrition") &&
          <VeganSelect handleFilter={handleFilter}/>
          }
        </Filter>
        {(cat === "Bikes" || cat === "Nutrition" || cat === "Clothes" || cat === "Accessory") &&
        <Filter>
          <FilterText>Sort By Price:</FilterText>
          <Select onChange={(e)=> setSort(e.target.value)}>
            <Option defaultValue="price" value="price">Price</Option>
            <Option value="high">Price (High)</Option>
            <Option value="low">Price (Low)</Option>
          </Select>
        </Filter>
        }
      </FilterContainer>
      <Link to="/product" className='linkItem'>
      <Products cat={cat} filters={filters} sort={sort}/>
      </Link>
      <Footer />
    </Container>
  );
};

export default ProductList;