import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { TokenAtom } from "Recoil/TokenAtom";
import styled from "styled-components";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const setAccessToken = useSetRecoilState(TokenAtom);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post("/user/login", { id: id, pw: password }).then((res) => {
      console.log(res.data);
      setAccessToken(res.data.accessToken);
      navigate("/");
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        아이디(ID)
        <input
          type="text"
          autoFocus
          placeholder="아이디를 입력해 주세요."
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </InputWrapper>
      <InputWrapper>
        비밀번호(Password)
        <input
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </InputWrapper>
      <Button type="submit">로그인</Button>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 50px;
  border-radius: 20px;
  background-color: var(--pure-white);
  gap: 10px;
`;
const InputWrapper = styled.label`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
  color: var(--font-gray);
  input {
    margin-top: 15px;
    padding: 5px 0;
    color: var(--font-black);
    border-bottom: 1px solid var(--main);
    &::placeholder {
      font-size: 1.5rem;
    }
  }
`;
const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 10px;
  &:hover {
    color: var(--pure-white);
    background-color: var(--main);
  }
`;

export default Login;
