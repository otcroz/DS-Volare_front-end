import styled from 'styled-components';
import { BeatLoader } from 'react-spinners';
import theme from '../../styles/theme';

type TextProps = {
  text: string;
};

const Spinner = ({ text }: TextProps) => {
  return (
    <SpinnerContainer>
      <BeatLoader size={'1rem'} color={theme.colors.darkOrange} />
      <SpinnerText>{text}</SpinnerText>
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const SpinnerText = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.darkOrange};
`;

export default Spinner;
