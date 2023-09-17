import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Link to={"/login"}>
        <Button>로그인</Button>
      </Link>
      <Link to={"/mypage"}>
        <Button>마이페이지</Button>
      </Link>
    </>
  );
};

const Button = styled.button`
  margin: 0 20px;
  padding: 40px 120px;
  border-radius: 30px;
  background-color: var(--pure-white);
  &:hover {
    color: var(--pure-white);
    background-color: var(--main);
  }
`;

export default Home;
