import React, { forwardRef, useEffect, useState } from 'react';
import { ReactComponent as FileDownloadIcon } from '../../../assets/icons/file_download_icon.svg';
import {
  GlassBox,
  TitleText,
  ContentBox,
  TutorialBox,
  TutorialTitle,
  TutorialText,
  HighlightedText,
  ConvertButton,
  FileButton,
  ScrollText,
} from '../../../styles/convertBoxStyles';
import StoryboardInfo from './StoryboardInfo';
import CutList from './CutList';
import { motion } from 'framer-motion';
import { useAnimationContext } from '../../../context/animationContext';
import { useConvertStep } from '../../../context/convertStepContext';
import {
  useScriptData,
  useScriptIdData,
  useStoryboardData,
} from '../../../context/convertDataContext';
import { sb1 } from './storyboardDummy';
import { useMutation } from '@tanstack/react-query';
import { mutationKeys } from '../../../utils/queryKeys';
import { useConvert } from '../../../hooks/useConvert';

type props = {
  data: string; // 추후 스토리보드 객체로 교체
  temp: string[];
  setTemp: (temp: string[]) => void;
  onMoveScroll: () => void;
  setSelect: (select: number) => void;
};

const StoryboardBox = forwardRef<HTMLDivElement, props>(
  ({ data, temp, setTemp, onMoveScroll, setSelect }, ref) => {
    const { controlStatistics, controlStoryboard, startAnimation } =
      useAnimationContext(); // 변환 컴포넌트 애니메이션 컨트롤
    const { step, setStep } = useConvertStep(); // 변환 단계 관리
    const [isClick, setIsClick] = useState<boolean>(false); // 버튼 클릭했을 시 true

    const { scriptId } = useScriptIdData();
    const { script } = useScriptData();
    const { storyboard, setStoryboard } = useStoryboardData();
    const { convertStoryboard } = useConvert();

    const StoryboardMutate = useMutation({
      mutationKey: mutationKeys.mutateStoryboard,
      mutationFn: () => convertStoryboard(scriptId, script),
      onSuccess: (result) => {
        const resultScene = result.scene;
        setStoryboard({ scene: resultScene });
        console.log(storyboard);

        step[3] = true;
        setStep([...step]);
        temp[2] = 'data';
        setTemp([...temp]);

        // 인디케이터 select 값 변경
        setSelect(3); // 통계로 이동

        // 애니메이션
        onMoveScroll();
        setTimeout(() => {
          startAnimation(controlStatistics);
        }, 1000);
      },
      onError: () => {
        console.log('update failure.');
      },
      onSettled: () => {
        console.log('call convertStoryboard API');
      },
    });

    const handleClick = () => {
      setIsClick(true); // 버튼 클릭했을 시 다음 단계가 보이도록
      StoryboardMutate.mutate();
    };

    return (
      <motion.div ref={ref} animate={controlStoryboard} style={{ opacity: 0 }}>
        {isClick ? (
          <GlassBox hasData={true}>
            {!StoryboardMutate.isPending ? (
              <>
                {StoryboardMutate.isSuccess && (
                  <>
                    <TitleText>스토리보드</TitleText>
                    <FileButton>
                      <FileDownloadIcon width="2rem" height="2rem" />
                      &nbsp;다운로드
                    </FileButton>
                    <ContentBox>
                      <ScrollText>
                        {storyboard.scene.map((s, index) => (
                          <>
                            <StoryboardInfo
                              data={{
                                sceneNum: s.sceneNum,
                                summary: s.summary,
                                location: s.location,
                                cutCount: s.content!.length,
                              }}
                            />
                            <CutList cuts={s.content!} />
                          </>
                        ))}
                      </ScrollText>
                    </ContentBox>
                  </>
                )}
                {StoryboardMutate.isError && (
                  <TitleText>스토리보드 변환을 실패했습니다..</TitleText>
                )}
              </>
            ) : (
              <>스피너 적용</>
            )}
          </GlassBox>
        ) : (
          <GlassBox hasData={false}>
            <TutorialBox>
              <TutorialTitle>#3 스토리보드 생성과 챗봇 기능</TutorialTitle>
              <TutorialText>
                1. 대본에 기반한 <HighlightedText>스토리보드</HighlightedText>가
                생성됩니다.
                <br />
                2. 수정과 각색에 도움을 주는{' '}
                <HighlightedText>챗봇</HighlightedText>을 사용할 수 있습니다.
              </TutorialText>
            </TutorialBox>
            {/* 대본 변환 후 버튼 활성화 */}
            <ConvertButton
              disabled={step[1]}
              onClick={handleClick}
              isWrite={step[1]}
            >
              스토리보드 변환
            </ConvertButton>
          </GlassBox>
        )}
      </motion.div>
    );
  }
);

export default StoryboardBox;
