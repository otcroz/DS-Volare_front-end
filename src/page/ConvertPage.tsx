import React, { useState } from 'react';
import styled from 'styled-components';
import bgImg from '../assets/background/bg-5.png';
import ConvertIndicator from '../component/ConvertIndicator';

interface TextProps {
  color: string;
  size: string;
  weight: string;
}

interface IndicatorProps {
  stateProps: string; // 모든 단계를 거쳤는지 여부
  stepProps: string; // 현재 사용자가 위치한 단계
}

const ConvertPage = () => {
  const [state, setState] = useState('complete');
  const [step, setStep] = useState('script');

  return (
    <Background>
      <BackgroundCover>
        <TopContainer>
          <TitleInput placeholder="제목을 입력해주세요." />
          <IndicatorBox>
            <ConvertIndicator stateProps={state} stepProps={step} />
            <SaveButton>저장</SaveButton>
          </IndicatorBox>
        </TopContainer>
        <ConvertStepWrapper>
          {/* 컴포넌트 삽입 */}
          <div>컴포넌트 1</div>
          <div>컴포넌트 2</div>
        </ConvertStepWrapper>
      </BackgroundCover>
    </Background>
  );
};

// text
const Text = styled.span<TextProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

// background
const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${bgImg});
  background-size: cover;
  height: 100vh;
`;

const BackgroundCover = styled.p`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #a6a29a66;
  backdrop-filter: blur(3px);
  padding: 0 5vw;
`;

// container
const ConvertStepWrapper = styled.div`
  display: flex;
  gap: 0 10vw;
  padding: 10vh; // TopContainer > height와 값 동일
`;

const TopContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  height: 10vh;
  gap: 10vw;
`;

const IndicatorBox = styled.div`
  display: flex;
  max-width: 650px;
  align-items: center;
`;

// component
const TitleInput = styled.input`
  width: 50vw; // equal convert box width
  max-width: 650px;
  height: 3rem;
  font-family: BookkMyungjo;
  opacity: 0.5;
  border-color: #ffffffaa;
  border-width: 2px;
  border-radius: 1rem;
  padding: 1rem;
  placeholdertextcolor: ${({ theme }) => theme.colors.brown};
  color: black;
`;

const SaveButton = styled.button`
  height: 1.5rem;
  font-family: BookkMyungjo;
  font-weight: bold;
  color: white;
`;

export default ConvertPage;
