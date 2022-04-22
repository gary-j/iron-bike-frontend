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

const FeaturesSelect = ({ handleFilter }) => {
  return (
    <Select name="features" onChange={handleFilter}>
      <Option value={""}>Features</Option>
      <Option>GPS</Option>
      <Option>Bluetooth</Option>
      <Option>Heart Rate Monitor</Option>
      <Option>Wireless</Option>
    </Select>
  );
};

export default FeaturesSelect;
