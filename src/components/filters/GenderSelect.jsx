import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

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
