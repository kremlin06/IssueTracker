import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Container = styled.main`
  background: linear-gradient(to right, #F8F9FA, #E5E7EB);
  padding: 20px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 400px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 19px;
  margin-bottom: 10px;
  letter-spacing: 1px;
  color: #5c3317;
`;

const Title = styled.h2`
  font-size: 28px;
  color: #333333;
  margin-bottom: 25px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    border-color: #EF7000;
    box-shadow: 0 0 5px rgba(239, 112, 0, 0.5);
  }
`;

const ForgotLink = styled(Link)`
  font-size: 12px;
  color: #6B7280;
  align-self: flex-end;
  text-decoration: none;
  margin-bottom: 20px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  background-color: #5c3317;
  color: #FFFFFF;
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 80px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: rgb(152, 61, 0);
    transform: scale(1.01);
  }
`;

const SignUpText = styled.p`
  font-size: 14px;
  color: #6B7280;
  margin-top: 20px;
  text-align: center;
`;

const SignUpLink = styled(Link)`
  color: #5c3317;
  text-decoration: none;
  font-weight: normal;

  &:hover {
    text-decoration: underline;
  }
`;

const BackLink = styled(Link)`
  font-size: 14px;
  color: #6B7280;
  text-decoration: none;
  margin-top: 15px;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Insert authentication logic or API integration here
    navigate("/user");
  };

  return (
    <Container>
      <Card>
        <Logo>PulseTrack</Logo>
        <Title>Welcome Back.</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" placeholder="Email or Username" />
          <Input type="password" placeholder="Password" />
          <ForgotLink to="/forgot-password">Forgot Password?</ForgotLink>
          <Button type="submit">Log In</Button>
        </Form>
        <SignUpText>
          Don't have an account? <SignUpLink to="/signup">Sign up</SignUpLink>
        </SignUpText>
        <BackLink to="/">← Back to Home</BackLink>
      </Card>
    </Container>
  );
};

export default memo(LoginPage);
