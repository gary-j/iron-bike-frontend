import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

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
