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

const GenderSelect = ({ handleFilter }) => {
  return (
    <Select name="sexCategory" onChange={handleFilter}>
      <Option value={""}>Gender</Option>
      <Option>Men</Option>
      <Option>Women</Option>
    </Select>
  );
};

export default GenderSelect;
