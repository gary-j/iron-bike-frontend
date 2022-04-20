import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const TypeClothesSelect = ({ handleFilter }) => {
  return (
    <Select name="type" onChange={handleFilter}>
      <Option value={""}>Type</Option>
      <Option>Helmets</Option>
      <Option>Jerseys</Option>
      <Option>Trousers</Option>
      <Option>Shoes</Option>
      <Option>Glasses</Option>
    </Select>
  );
};

export default TypeClothesSelect;
