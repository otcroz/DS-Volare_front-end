import React from 'react';
import styled from 'styled-components';
import ConvertBoxWrapper from './ConvertBoxWrapper';

const TitleText = styled.div`
  color: white;
  font-size: 1.75rem;
  padding: 1rem;
`

const ContentBox = styled.div`
  background-color: white;
  width: 600px;
  height: 450px;
  border-radius: 1.25rem;
`

const TutorialBox = styled.div`
  width: 80%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1.25rem;
  text-align: center;
  margin: 20% 0;
`

const TutorialTitle = styled.h1`
  font-size: 1.25rem;
  color: #4F493D;
  margin: 2rem 0;
`;

const TutorialText = styled.p`
  font-size: 1rem;
  color: #4F493D;
  line-height: 2;
  text-align: center;
  margin: 2rem;
`;

const HighlightedText = styled.span`
  color: #d35400;
  font-weight: bold;
`;

const ConvertButton = styled.button`
  background: linear-gradient(90deg, #EA7333, #84411D);
  color: #ffffff;
  border: none;
  border-radius: 3rem;
  padding: 1rem 3rem;
  cursor: pointer;
  font-size: 1.25rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

type props = {
  data: string;
  characterList: string;
};

const CharacterBox = ({ data, characterList }: props) => {

  return (
    <>
      {data ? 
        <ConvertBoxWrapper>
          <TitleText>등장인물 확인</TitleText>
          <ContentBox>
            
            
          </ContentBox>
          <TitleText>등장인물</TitleText>
        
        </ConvertBoxWrapper>
      :
        <ConvertBoxWrapper mode="tutorial">
          <TutorialBox>
            <TutorialTitle>#1 소설 원고 입력하기</TutorialTitle>
            <TutorialText>
              1. 좌측에 소설 원고를 작성합니다.<br />
              2. <HighlightedText>등장인물 인식 버튼</HighlightedText>을 누릅니다.<br />
              3. 등장인물 목록을 확인하고 수정합니다.
            </TutorialText>
          </TutorialBox>
          <ConvertButton>등장인물 인식</ConvertButton>
        </ConvertBoxWrapper>
      }
    </>
  );
};

export default CharacterBox;
