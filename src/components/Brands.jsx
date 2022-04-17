import styled from "styled-components";
import { brandsList} from "../dataTest";
import Brand from "./Brand";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Brands = () => {
  return (
    <Container>
      {brandsList.map((item) => (
        <Brand item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Brands;