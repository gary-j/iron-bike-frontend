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

const FrameMaterialsSelect = ({ handleFilter }) => {
  return (
    <Select name="frameMaterials" onChange={handleFilter}>
      <Option value={""}>Frame</Option>
      <Option>Aluminum</Option>
      <Option>Carbon</Option>
      <Option>Titanium</Option>
    </Select>
  );
};

export default FrameMaterialsSelect;
