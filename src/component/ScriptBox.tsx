import React from 'react';
import styled from 'styled-components';
import ConvertBoxWrapper from './ConvertBoxWrapper';
import { ReactComponent as FileDownloadIcon } from '../assets/icons/file_download_icon.svg';

const TitleText = styled.div`
  color: white;
  font-size: 1.75rem;
  padding: 1rem;
`

const ContentBox = styled.div`
  background-color: white;
  width: 560px;
  height: 560px;
  border-radius: 1.25rem;
  padding: 1.25rem;
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

const FileDownloadButton = styled.div`
  width: 12.5rem;
  text-align: center;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 0.75rem;
  background-color: #BB4E11;
  border-radius: 0.625rem 0.625rem 0 0;
  position: absolute;
  top: 2.2rem;
  right: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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
          <FileDownloadButton><FileDownloadIcon  width="2rem" height="2rem" />&nbsp;다운로드</FileDownloadButton>
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
