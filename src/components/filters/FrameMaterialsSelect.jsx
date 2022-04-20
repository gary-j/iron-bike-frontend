import React from "react";
import styled from "styled-components";

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

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
