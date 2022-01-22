import React from "react";
import { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #1F4068;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button` 
  width: 40%;
  border: none;
  border-radius: 5%;
  padding: 15px 20px;
  background-color: #1F4068;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: gray;
    cursor: not-allowed;
  }
`;

// const LinkStyle = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

// const LoginError = styled.span`
//   color: red;
// `;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
            <Input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> */}
            <Button onClick={handleClick}>LOGIN</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
}

export default Login;
