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

const SizeSelect = ({ handleFilter }) => {
  return (
    <Select name="size" onChange={handleFilter}>
      <Option value={""}>Size</Option>
      <Option>S</Option>
      <Option>M</Option>
      <Option>L</Option>
      <Option>XL</Option>
    </Select>
  );
};

export default SizeSelect;
