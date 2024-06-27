import React from 'react';
import styled from 'styled-components';
import ConvertBoxWrapper from './ConvertBoxWrapper';
import CharacterChipList from './CharacterChipList';
import {
  TitleText,
  ContentBox,
  TutorialBox,
  TutorialTitle,
  TutorialText,
  HighlightedText,
  ConvertButton
} from './convertBoxStyles';


const ScriptTextArea = styled.textarea`
  width: 100%;
  height: calc(100% - 2.5rem);
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 1rem;
  font-family: 'Arial', sans-serif;
  
  resize: none;
  margin-top: 10px;
  white-space: pre-wrap;
  overflow-wrap: break-word;

  &:focus {
    outline: none;
  }
`

interface Props {
  data: string;
  characterList: string;
}

const CharacterBox = ({ data, characterList }: Props) => (
  <>
    {data ? (
      <ConvertBoxWrapper>
        <TitleText>등장인물 인식 결과</TitleText>
        <ContentBox style={{height: '25rem'}}>
          <ScriptTextArea />
        </ContentBox>
        <TitleText>등장인물</TitleText>
        <CharacterChipList />
      </ConvertBoxWrapper>
    ) : (
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
    )}
  </>
);

export default CharacterBox;
