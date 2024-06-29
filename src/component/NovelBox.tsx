import React, { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import ConvertBoxWrapper from './ConvertBoxWrapper';
import { ReactComponent as FileUploadIcon } from '../assets/icons/file_upload_icon.svg';
import {
  TitleText,
  ContentBox,
  FileButton
} from './convertBoxStyles';

const NovelTextArea = styled.textarea`
  width: 100%;
  height: calc(100% - 2.5rem);
  border: none;
  box-sizing: border-box;
  font-size: 1rem;
  font-family: 'Arial', sans-serif;
  resize: none;
  margin-top: 0.625rem;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  &:focus {
    outline: none;
  }
`

const HiddenFileInput = styled.input`
  display: none;
`;

type props = {
  data: string;
};


const NovelBox = ({ data }: props) => {
  const [text, setText] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result && typeof result === 'string') {
          setText(result);
        }
      };
      reader.readAsText(file);
    } else {
      alert('Please upload a valid text file.');
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // file input 요소를 클릭하여 파일 선택 대화 상자를 엽니다.
  };

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value); // textarea의 value를 업데이트합니다.
  };
  
  return (
    <ConvertBoxWrapper>
      <TitleText>원고 작성</TitleText>
      <FileButton onClick={handleButtonClick}><FileUploadIcon width="2rem" height="2rem" />&nbsp;파일 업로드</FileButton>
      <HiddenFileInput
        type="file"
        accept=".txt"
        ref={fileInputRef}
        onChange={handleFileUpload}
      />
      <ContentBox>
        <NovelTextArea
          value={text}
          onChange={handleTextChange}
          wrap="soft"
          placeholder="내용을 입력하거나 텍스트 파일을 첨부하세요." />
      </ContentBox>
    </ConvertBoxWrapper>

  );

};

export default NovelBox;
