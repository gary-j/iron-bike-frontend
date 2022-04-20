import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

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
