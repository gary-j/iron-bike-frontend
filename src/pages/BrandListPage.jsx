import styled from "styled-components";
import Navbar from "../components/Navbar";
import Advertisement from "../components/Advertisement";
import Brands from "../components/Brands";
import Footer from "../components/Footer";

const Container = styled.div``;

const Title = styled.h1`
  color: black;
  text-decoration: 3px underline #12996d;
  margin-top: 50px;
  margin-bottom: 100px;
  `;

const BrandListPage = () => {

  return (
    <Container>
      <Navbar />
      <Advertisement />
      <Title>ALL Brands</Title>
        <Brands />
      <Footer />
    </Container>
  );
};

export default BrandListPage;
