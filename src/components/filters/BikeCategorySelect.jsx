import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

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
