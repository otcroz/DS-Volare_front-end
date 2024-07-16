import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import ConvertBoxWrapper from './ConvertBoxWrapper';
import { ReactComponent as FileDownloadIcon } from '../assets/icons/file_download_icon.svg';
import {
  TitleText,
  ContentBox,
  ScrollTextArea,
  TutorialBox,
  TutorialTitle,
  TutorialText,
  HighlightedText,
  ConvertButton,
  FileButton,
} from '../styles/convertBoxStyles';
import { useAnimationContext } from '../context/animationContext';
import { useConvertStep } from '../context/convertStepContext';

type props = {
  data: string;
  temp: string[];
  setTemp: (temp: string[]) => void;
  onMoveScroll: () => void;
  setSelect: (select: number) => void;
};

const ScriptBox = forwardRef<HTMLDivElement, props>(
  ({ data, temp, setTemp, onMoveScroll, setSelect }, ref) => {
    const { controlScripts, controlStoryboard, startAnimation } =
      useAnimationContext(); // 변환 컴포넌트 애니메이션 컨트롤
    const { step, setStep } = useConvertStep(); // 변환 단계 관리

    const handleClick = () => {
      temp[1] = 'data';
      setTemp([...temp]);
      step[2] = true;
      setStep([...step]);

      // 인디케이터 select 값 변경
      setSelect(2); // 스토리보드로 이동

      // 애니메이션
      onMoveScroll();
      setTimeout(() => {
        startAnimation(controlStoryboard);
      }, 1000);
    };

    return (
      <motion.div ref={ref} animate={controlScripts} style={{ opacity: 0 }}>
        {data ? (
          <ConvertBoxWrapper>
            <TitleText>대본화</TitleText>
            <FileButton>
              <FileDownloadIcon width="2rem" height="2rem" />
              &nbsp;다운로드
            </FileButton>
            <ContentBox>
              <ScrollTextArea placeholder="텍스트" />
            </ContentBox>
          </ConvertBoxWrapper>
        ) : (
          <ConvertBoxWrapper mode="tutorial">
            <TutorialBox>
              <TutorialTitle>#2 소설을 대본으로 변환하기</TutorialTitle>
              <TutorialText>
                입력한 정보를 토대로
                <br />
                각 등장인물의 대사와 행위를 구분해
                <br />
                <HighlightedText>대본 형식으로 변환</HighlightedText>합니다.
              </TutorialText>
            </TutorialBox>
            <ConvertButton onClick={handleClick} isWrite={true}>
              대본 변환
            </ConvertButton>
          </ConvertBoxWrapper>
        )}
      </motion.div>
    );
  }
);

export default ScriptBox;
