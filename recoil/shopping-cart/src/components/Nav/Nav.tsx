import { Link } from "react-router-dom";
import styled from "styled-components";
import logoElem from "assets/logo.png";

const Nav = () => {
  return (
    <Header>
      <Wrapper>
        <Link to={"/"} aria-label="홈으로 이동">
          <Logo src={logoElem} alt="홈 아이콘" />
        </Link>
        <NavText>
          <Link to={"/"} aria-label="홈으로 이동">
            홈
          </Link>
          <Link to={"/cart"} aria-label="장바구니로 이동">
            장바구니
          </Link>
        </NavText>
      </Wrapper>
    </Header>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 60px;
  background-color: var(--line-gray);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  padding: 0 16px;
`;

const NavText = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
  max-width: 1024px;
  gap: 36px;
  > span {
    font-weight: bold;
    cursor: pointer;
  }
`;

const Logo = styled.img`
  width: 48px;
`;

export default Nav;
