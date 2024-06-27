import React from 'react';
import styled from 'styled-components';
import ConvertBoxWrapper from './ConvertBoxWrapper';
import { ReactComponent as FileDownloadIcon } from '../assets/icons/file_download_icon.svg';
import {
  TitleText,
  ContentBox,
  TutorialBox,
  TutorialTitle,
  TutorialText,
  HighlightedText,
  ConvertButton,
  FileButton
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


type props = {
  data: string;
};

const ScriptBox = ({ data }: props) =>  {

  return (
    <>
      {data ? 
        <ConvertBoxWrapper>
          <TitleText>대본화</TitleText>
          <FileButton><FileDownloadIcon  width="2rem" height="2rem" />&nbsp;다운로드</FileButton>
          <ContentBox>
            <ScriptTextArea></ScriptTextArea>
            
          </ContentBox>
        </ConvertBoxWrapper>
      :
        <ConvertBoxWrapper mode="tutorial">
          <TutorialBox>
            <TutorialTitle>#2 소설을 대본으로 변환하기</TutorialTitle>
            <TutorialText>
              입력한 정보를 토대로<br/>
              각 등장인물의 대사와 행위를 구분해<br/>
              <HighlightedText>대본 형식으로 변환</HighlightedText>합니다.
            </TutorialText>
          </TutorialBox>
          <ConvertButton>대본 변환</ConvertButton>
        </ConvertBoxWrapper>
      }
    </>
  );
};

export default ScriptBox;
