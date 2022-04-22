import React from "react";
import styled from "styled-components";
import { mobile } from "../../Responsive";

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ width: "100px", fontSize: "x-small"})}
`;
const Option = styled.option`
  ${mobile({ fontSize: "x-small" })}
`;

const AspectSelect = ({ handleFilter }) => {
  return (
    <Select name="aspect" onChange={handleFilter}>
      <Option value={""}>Aspect</Option>
      <Option>Bars</Option>
      <Option>Gels</Option>
      <Option>Drinks</Option>
      <Option>Energy Meals</Option>
    </Select>
  );
};

export default AspectSelect;
