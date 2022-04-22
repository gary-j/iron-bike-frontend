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

const VeganSelect = ({ handleFilter }) => {
  return (
    <Select name="vegan" onChange={handleFilter}>
      <Option value={""}>Vegan</Option>
      <Option>Yes</Option>
      <Option>None</Option>
    </Select>
  );
};

export default VeganSelect;
