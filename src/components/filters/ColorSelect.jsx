import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

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
