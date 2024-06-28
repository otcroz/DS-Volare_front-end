import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const navigateConvertScript = () => {
    navigate('/convert');
  };

  return (
    <Container>
      <Logo />
      <Text onClick={navigateConvertScript}>대본 변환</Text>
      <div style={{ flex: 1 }} />
      <Text>회원가입</Text>
      <Text>로그인</Text>
    </Container>
  );
};

// text
const Text = styled.span`
  font-size: 20px;
  color: white;
`;

// container
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 50px;
  gap: 30px;
  background-color: ${({ theme }) => theme.colors.baseColor1};
`;

// component
const Logo = styled.image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: white;
`;

export default NavBar;
