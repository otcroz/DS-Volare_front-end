import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface IndicatorProps {
  stateProps: string; // 모든 단계를 거쳤는지 여부
  stepProps: string; // 현재 사용자가 위치한 단계
}

const ConvertIndicator = ({ stateProps, stepProps }: IndicatorProps) => {
  const [state, setState] = useState(stateProps);
  const [step, setStep] = useState(stepProps);
  const [levelColor, setLevelColor] = useState<string[]>([]);
  const stepNameList: string[] = ['소설', '대본', '스토리보드', '통계'];

  useEffect(() => {
    IndicatorItemColorFunc(); // indicator
  });

  const IndicatorItemColorFunc = () => {
    if (state !== 'complete') {
      switch (step) {
        case 'novel':
          setLevelColor(['#EA7333', '#d8d2c5', '#d8d2c5', '#d8d2c5']);
          break;
        case 'script':
          setLevelColor(['#EA7333', '#BB4E11', '#d8d2c5', '#d8d2c5']);
          break;
        case 'storyboard':
          setLevelColor(['#EA7333', '#EA7333', '#BB4E11', '#d8d2c5']);
          break;
        case 'statistics':
          setLevelColor(['#EA7333', '#EA7333', '#EA7333', '#BB4E11']);
          break;
      }
    } else {
      switch (step) {
        case 'novel':
          setLevelColor(['#BB4E11', '#EA7333', '#EA7333', '#EA7333']);
          break;
        case 'script':
          setLevelColor(['#EA7333', '#BB4E11', '#EA7333', '#EA7333']);
          break;
        case 'storyboard':
          setLevelColor(['#EA7333', '#EA7333', '#BB4E11', '#EA7333']);
          break;
        case 'statistics':
          setLevelColor(['#EA7333', '#EA7333', '#EA7333', '#BB4E11']);
          break;
      }
    }
  };

  return (
    <IndicatorContainer>
      {stepNameList.map((item, index) => {
        return (
          <IndicatorBox
            key={index}
            style={{
              backgroundColor: levelColor[index],
              color: levelColor[index] === '#d8d2c5' ? '#8B766C' : 'white',
            }}
          >
            {item}
          </IndicatorBox>
        );
      })}
    </IndicatorContainer>
  );
};

const IndicatorContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const IndicatorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 7vw;
  max-width: 120px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.beige};
  padding: 1.1rem;
  font-weight: bold;
`;

export default ConvertIndicator;
