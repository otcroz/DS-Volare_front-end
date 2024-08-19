import React, { createContext, useContext, useState } from 'react';
import { AnimationControls } from 'framer-motion';
import { useAnimation } from 'framer-motion';

type pageContextType = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

// 화면 전환, 인디케이터
type mainAnimateContextType = {
  controlScreen: AnimationControls;
  controlIndicater: AnimationControls;
};

// 전역: 컨택스트 정의
const PageContext = createContext<pageContextType | undefined>({
  page: 1,
  setPage: () => {},
});

const MainAnimateContext = createContext<mainAnimateContextType | undefined>(
  undefined
);

// 컨택스트를 전역적으로 제공할 수 있는 프로바이더 작성
const MainPageAnimateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [page, setPage] = useState<number>(1);
  const controlScreen = useAnimation(); // 화면 전환 애니메이션 컨트롤
  const controlIndicater = useAnimation(); // 인디케이터 애니메이션 컨트롤

  // 자식 객체에게 provider을 통해 control 객체 제공
  return (
    <PageContext.Provider value={{ page, setPage }}>
      <MainAnimateContext.Provider value={{ controlScreen, controlIndicater }}>
        {children}
      </MainAnimateContext.Provider>
    </PageContext.Provider>
  );
};

// 컨텍스트 값을 사용하는 커스텀 훅
const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error(
      'usePageContext must be used within a MainPageAnimateProvider'
    );
  }
  return context;
};

const useMainAnimationContext = (): mainAnimateContextType => {
  const context = useContext(MainAnimateContext);
  if (!context) {
    // 컨텍스트가 설정되지 않은 경우
    throw new Error(
      'useMainAnimationContext must be used within an MainPageAnimateProvider'
    );
  }
  return context;
};

export { MainPageAnimateProvider, usePageContext, useMainAnimationContext };
