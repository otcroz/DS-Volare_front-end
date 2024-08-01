import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';

const NavBar = () => {
  const navigate = useNavigate();

  // temp useState
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigateConvertScript = () => {
    navigate('/convert');
  };

  const navigateMypage = () => {
    navigate('/mypage');
  };

  const openModalFunc = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <Container>
      <LoginModal isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <Logo />
      <Text onClick={navigateConvertScript}>대본 변환</Text>
      <div style={{ flex: 1 }} />
      {!isLogin ? (
        <>
          <Text>회원가입</Text>
          <Text onClick={openModalFunc}>로그인</Text>
        </>
      ) : (
        <>
          <Text onClick={navigateMypage}>마이페이지</Text>
          <Text>로그아웃</Text>
        </>
      )}
    </Container>
  );
};

// text
const Text = styled.span`
  font-size: 1rem;
  color: white;
`;

// container
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 50px;
  gap: 30px;
  background-color: ${({ theme }) => theme.colors.olive};
`;

// component
const Logo = styled.image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: white;
`;

export default NavBar;
