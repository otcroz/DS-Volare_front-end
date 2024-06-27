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

type props = {
  data: string;
};

const StoryboardBox = ({ data }: props) => {

  return (
    <>
      {data ? 
        <ConvertBoxWrapper>
          <TitleText>스토리보드</TitleText>
          <FileButton><FileDownloadIcon  width="2rem" height="2rem" />&nbsp;다운로드</FileButton>
          <ContentBox>
            
          </ContentBox>
        </ConvertBoxWrapper>
      :
        <ConvertBoxWrapper mode="tutorial">
          <TutorialBox>
            <TutorialTitle>#3 스토리보드 생성과 챗봇 기능</TutorialTitle>
            <TutorialText>
              1. 대본에 기반한 <HighlightedText>스토리보드</HighlightedText>가 생성됩니다.<br/>
              2. 수정과 각색에 도움을 주는 <HighlightedText>챗봇</HighlightedText>을 사용할 수 있습니다.
            </TutorialText>
          </TutorialBox>
          <ConvertButton>스토리보드 변환</ConvertButton>
        </ConvertBoxWrapper>
      }
    </>
  );
};

export default StoryboardBox;
