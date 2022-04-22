import React from "react";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ width: "100px", fontSize: "x-small" })}
`;
const Option = styled.option`
  ${mobile({ fontSize: "x-small" })}
`;

const BikeCategorySelect = ({ handleFilter }) => {
  return (
    <Select name="categoryBike" onChange={handleFilter}>
      <Option value={""}>Category</Option>
      <Option>Road Bike</Option>
      <Option>Mountain Bike</Option>
      <Option>City Bike</Option>
      <Option>E-Bike</Option>
    </Select>
  );
};

export default BikeCategorySelect;
