import React, { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as FileDownloadIcon } from '../../../assets/icons/file_download_icon.svg';
import {
  GlassBox,
  TitleText,
  ContentBox,
  ScrollText,
  TutorialBox,
  TutorialTitle,
  TutorialText,
  HighlightedText,
  ConvertButton,
  FileButton,
} from '../../../styles/convertBoxStyles';
import { useAnimationContext } from '../../../context/animationContext';
import { useConvertStep } from '../../../context/convertStepContext';
import SceneList from './SceneList';
import { useConvert } from '../../../hooks/useConvert';
import {
  useCharaterData,
  useNovelData,
} from '../../../context/convertDataContext';

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

    const { text } = useNovelData();
    const { characterList } = useCharaterData();

    const { step, setStep } = useConvertStep(); // 변환 단계 관리
    const { convertScript } = useConvert();

    const handleClick = async () => {
      //console.log(' script 요청 text: ', text);
      //console.log(' script 요청 characterList: ', characterList);
      const result = await convertScript(
        characterList,
        text,
        '3d60ef52-dcd3-4aaf-a93a-922e78a69778'
      );
      console.log(result);
      if (result) {
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
      } else {
        console.log('fail to convert script!');
      }
    };

    return (
      <motion.div ref={ref} animate={controlScripts} style={{ opacity: 0 }}>
        {data ? (
          <GlassBox hasData={true}>
            <TitleText>대본화</TitleText>
            <FileButton>
              <FileDownloadIcon width="2rem" height="2rem" />
              &nbsp;다운로드
            </FileButton>
            <ContentBox>
              <ScrollText>
                <SceneList />
              </ScrollText>
            </ContentBox>
          </GlassBox>
        ) : (
          <GlassBox hasData={false}>
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
            <ConvertButton disabled={true} onClick={handleClick} isWrite={true}>
              대본 변환
            </ConvertButton>
          </GlassBox>
        )}
      </motion.div>
    );
  }
);

export default ScriptBox;
