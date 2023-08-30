import { Outlet } from "react-router";
import styled from "styled-components";

export const DefaultLayout = () => {
  return (
    <BackDrop>
      <Layout>
        <Outlet></Outlet>
      </Layout>
    </BackDrop>
  );
};

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto 70px auto;
  height: 100%;
  min-height: calc(100vh - 60px);
  background-color: var(--pure-white);
`;
const BackDrop = styled.div`
  width: 100%;
  margin-top: 60px;
  min-height: calc(100vh - 60px);
  background-color: var(--line-gray);
  border: 1px solid var(--line-gray);
`;
