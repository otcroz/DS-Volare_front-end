import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LoginModal from './LoginModal';
import { ReactComponent as NavLogo } from '../../assets/icons/nav_logo_icon.svg';
import { useUser } from '../../hooks/useUser';
import { useAuth } from '../../hooks/useAuth';

const NavBar = () => {
  const navigate = useNavigate();
  const { getTokenUser } = useUser();
  const { logout } = useAuth();

  // temp useState
  const [isLogin, setIsLogin] = useState<Boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { updateUser } = useUser();

  useEffect(() => {
    const { isCheckUser } = getTokenUser();
    if (Boolean(isCheckUser)) setIsLogin(true);
    else {
      updateUser(); // 유저 정보 업데이트
    }
  }, []);

  const navigateConvertScript = () => {
    navigate('/convert');
  };

  const navigateMypage = () => {
    navigate('/mypage');
  };

  const navigateMainPage = () => {
    navigate('/main');
  };

  const openModalFunc = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleLogout = async () => {
    const complete = await logout();
    // 로그아웃 성공 여부 처리
    if (complete) setIsLogin(false);
    // 추후에 모달 or 토스트 띄울 예정
  };

  return (
    <Container>
      <LoginModal isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <NavLogo width={50} onClick={navigateMainPage} />
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
          <Text onClick={handleLogout}>로그아웃</Text>
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

export default NavBar;
