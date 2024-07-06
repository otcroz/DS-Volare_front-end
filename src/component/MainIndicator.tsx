import styled, { css } from 'styled-components';

interface boxProps {
  selected: number;
  index: number;
}

interface selectProps {
  page: number;
  setPage: (select: number) => void;
}

const MainIndicator = ({ page, setPage }: selectProps) => {
  const IndicatorName: string[] = [
    '서비스 소개',
    '체험하기',
    '서비스 사용하기',
  ];

  return (
    <IndicatorContainer>
      {IndicatorName.map((item, index) => {
        return (
          <IndicatorBox key={index} onClick={() => setPage(index + 1)}>
            <IndicatorText selected={page} index={index + 1}>
              {item}
            </IndicatorText>
            <IndicatorShape selected={page} index={index + 1} />
          </IndicatorBox>
        );
      })}
    </IndicatorContainer>
  );
};

// container
const IndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-self: flex-start;
  align-items: flex-end;
`;

const IndicatorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const IndicatorText = styled.span<boxProps>`
  font-weight: bold;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.brown};
  ${({ selected, index }) =>
    selected === index &&
    css`
      font-size: 1.4rem;
      color: ${({ theme }) => theme.colors.darkOrange};
    `}
`;

const IndicatorShape = styled.div<boxProps>`
  width: 2rem;
  height: 2rem;
  background-color: gray;
  border-radius: 5rem;
  ${({ selected, index }) =>
    selected === index &&
    css`
      width: 2.5rem;
      height: 2.5rem;
      background-color: ${({ theme }) => theme.colors.orange};
    `}
`;

export default MainIndicator;
