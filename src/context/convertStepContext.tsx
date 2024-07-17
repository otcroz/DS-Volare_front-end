import React, { createContext, useContext, useState } from 'react';

type stepContextType = {
  step: boolean[];
  setStep: React.Dispatch<React.SetStateAction<boolean[]>>;
};

// 전역: 컨택스트 정의
const StepContext = createContext<stepContextType | undefined>({
  step: [false, false, false, false],
  setStep: () => {},
});

// 컨택스트를 전역적으로 제공할 수 있는 프로바이더 작성
const ConvertStepProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState<boolean[]>([false, false, false, false]);

  // 자식 객체에게 provider을 통해 control 객체 제공
  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
};

// 컨텍스트 값을 사용하는 커스텀 훅
const useConvertStep = () => {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
};

export { ConvertStepProvider, useConvertStep };
