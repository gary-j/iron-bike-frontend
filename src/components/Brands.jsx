import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Brand from "./Brand";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Brands = () => {

  const [brandsList, setBrandsList] = useState([]);
  
  useEffect(() => {
    const getBrands = async () => {
      try {
        const res = await axios.get("http://localhost:5005/api/brand");
        setBrandsList(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getBrands();
  }, []);

  return (
    <Container>
      {brandsList.map((item) => (
        <Brand item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Brands;