import Modal from 'react-modal';
import styled from 'styled-components';
import theme from '../../styles/theme';

interface ModalProps {
  isOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
}

const LoginModal = ({ isOpen, setModalIsOpen }: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyle}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
    >
      {/* exit */}
      <ExitContainer></ExitContainer>
      {/* content */}
      <LayoutContainer>
        <Text style={{ color: theme.colors.darkBrown }}>
          소셜 계정으로 로그인하기
        </Text>
        <div style={{ height: '80px' }} />
        <ButtonBox>
          <Button
            style={{ backgroundColor: 'rgba(45,180,0,0.7)', color: 'white' }}
          >
            네이버로 로그인
          </Button>
          <Button
            style={{
              backgroundColor: theme.colors.beige,
              color: theme.colors.darkBrown,
            }}
          >
            구글로 로그인
          </Button>
        </ButtonBox>
      </LayoutContainer>
    </Modal>
  );
};

// text
const Text = styled.span`
  font-size: 1rem;
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
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

// conponent
const Button = styled.div`
  text-align: center;
  width: 270px;
  padding: 0.8rem 0;
  font-size: 0.8rem;
  border-radius: 1rem;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3);
`;

// modal style
const customStyle: ReactModal.Styles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  content: {
    maxWidth: '500px',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    height: 370,
    backgroundColor: 'rgba(255,255,255,0.6)',
    overflow: 'auto',
    borderStyle: 'none',
    borderRadius: '30px',
    outline: 'none',
    padding: 0,
    boxShadow: '0px 2px 7px rgba(0,0,0,0.3)',
  },
};

export default LoginModal;
