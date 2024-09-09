import Modal from 'react-modal';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { ModalCustomStyle } from '../../styles/mainStyles';

interface ModalProps {
  isOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
}

const TokenExpireModal = ({ isOpen, setModalIsOpen }: ModalProps) => {
  const handleButtonClick = async () => {
    setModalIsOpen(false);
    window.location.reload(); // 페이지 리로드, 모든 상태 초기화
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={ModalCustomStyle}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
    >
      {/* exit */}
      <ExitContainer></ExitContainer>
      {/* content */}
      <LayoutContainer>
        <Text style={{ color: theme.colors.darkBrown }}>
          오랫동안 서비스를 사용하지 않아 로그아웃이 되었어요. <br />
          다시 로그인을 해서 서비스를 이용해주세요.
        </Text>
        <div style={{ height: '80px' }} />
        <ButtonBox>
          <Button
            onClick={handleButtonClick}
            style={{ backgroundColor: theme.colors.olive }}
          >
            알겠습니다!
          </Button>
        </ButtonBox>
      </LayoutContainer>
    </Modal>
  );
};

// text
const Text = styled.span`
  font-size: 1rem;
  text-align: center;
`;

// container
const ExitContainer = styled.div`
  display: flex;
  height: 2rem;
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

// conponent
const Button = styled.button`
  text-align: center;
  width: 10rem;
  padding: 0.8rem 0;
  font-size: 0.8rem;
  border-radius: 1rem;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
`;

export default TokenExpireModal;
