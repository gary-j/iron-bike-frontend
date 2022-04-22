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

const ColorSelect = ({ handleFilter }) => {
  return (
    <Select name="color" onChange={handleFilter}>
      <Option value={""}>Color</Option>
      <Option>White</Option>
      <Option>Black</Option>
      <Option>Red</Option>
      <Option>Green</Option>
      <Option>Orange</Option>
    </Select>
  );
};

export default ColorSelect;
