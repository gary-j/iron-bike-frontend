import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const AspectSelect = ({ handleFilter }) => {
  return (
    <Select name="aspect" onChange={handleFilter}>
      <Option value={""}>Aspect</Option>
      <Option>Bars</Option>
      <Option>Gels</Option>
      <Option>Drinks</Option>
      <Option>Energy Meals</Option>
    </Select>
  );
};

export default AspectSelect;
