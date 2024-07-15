import React, { createContext, useContext } from 'react';
import { AnimationControls } from 'framer-motion';
import { useConvertAnimation } from '../hooks/useConvertAnimation';

type animationContextType = {
  controlScripts: AnimationControls;
  controlStoryboard: AnimationControls;
  controlStatistics: AnimationControls;
  startAnimation: (controls: AnimationControls) => void;
};

// 전역: 컨택스트 정의
const AnimationContext = createContext<animationContextType | undefined>(
  undefined
);

// 컨택스트를 전역적으로 제공할 수 있는 프로바이더 작성
const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const animation = useConvertAnimation();

  // 자식 객체에게 provider을 통해 control 객체 제공
  return (
    <AnimationContext.Provider value={animation}>
      {children}
    </AnimationContext.Provider>
  );
};

// AnimationContext에서 값을 가져와 전역적 사용.
// 컨텍스트가 올바르게 설정되었는지 확인.
const useAnimationContext = (): animationContextType => {
  const context = useContext(AnimationContext);
  if (!context) {
    // 컨텍스트가 설정되지 않은 경우
    throw new Error(
      'useAnimationContext must be used within an AnimationProvider'
    );
  }
  return context;
};

export { AnimationProvider, useAnimationContext };
