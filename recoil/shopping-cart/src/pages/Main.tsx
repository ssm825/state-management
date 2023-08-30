import styled from "styled-components";
import ProductCard from "../components/ProductCard/ProductCard";
import dummyData from "../model/dummyData";

const Main = () => {
  return (
    <ProductWrapper>
      {dummyData.map((prdData) => (
        <li key={prdData.id}>
          <ProductCard data={prdData} />
        </li>
      ))}
    </ProductWrapper>
  );
};

const ProductWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 8px;
`;

export default Main;
