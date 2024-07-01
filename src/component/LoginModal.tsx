import Modal from 'react-modal';
import styled from 'styled-components';
import theme from '../styles/theme';

interface ModalProps {
  isOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
}

interface TextProps {
  color: string;
  size: string;
}

interface ButtonProps {
  bgColor: string;
  color: string;
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
        <Text color={theme.colors.darkBrown} size={'1rem'}>
          소셜 계정으로 로그인하기
        </Text>
        <div style={{ height: '80px' }} />
        <ButtonBox>
          <Button bgColor={'#2DB40099'} color={'white'}>
            네이버로 로그인
          </Button>
          <Button
            bgColor={theme.colors.beige + '99'}
            color={theme.colors.darkBrown}
          >
            구글로 로그인
          </Button>
        </ButtonBox>
      </LayoutContainer>
    </Modal>
  );
};

// text
const Text = styled.span<TextProps>`
  font-size: 1rem;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
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
const Button = styled.div<ButtonProps>`
  text-align: center;
  width: 270px;
  padding: 0.8rem 0;
  font-size: 0.8rem;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border-radius: 1rem;
  box-shadow: 0px 1px 4px #00000033;
`;

// modal style
const customStyle: ReactModal.Styles = {
  overlay: {
    backgroundColor: '#00000040',
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
    backgroundColor: '#ffffff88',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderStyle: 'none',
    borderRadius: '30px',
    outline: 'none',
    padding: 0,
    boxShadow: '0px 2px 7px #00000033',
  },
};

export default LoginModal;
