import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

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
