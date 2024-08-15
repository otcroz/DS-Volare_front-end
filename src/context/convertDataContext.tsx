import React, { createContext, useContext, useState } from 'react';
import { Script } from '../types';

// 타입 정의
type NovelTitleContextType = {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};

type NovelContextType = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

type CharacterContextType = {
  characterList: string[];
  setCharacterList: React.Dispatch<React.SetStateAction<string[]>>;
};

type ScriptContextType = {
  script: Script;
  setScript: React.Dispatch<React.SetStateAction<Script>>;
};

type StoryboardContextType = {};

type StatisticsContextType = {};

// 전역: 컨택스트 정의
const NovelTitleContext = createContext<NovelTitleContextType | undefined>({
  title: '',
  setTitle: () => {},
});

const NovelContext = createContext<NovelContextType | undefined>({
  text: '',
  setText: () => {},
});

const CharacterContext = createContext<CharacterContextType | undefined>({
  characterList: [],
  setCharacterList: () => {},
});

const ScriptContext = createContext<ScriptContextType | undefined>({
  script: {
    scene: [],
  },
  setScript: () => {},
});

// 컨택스트를 전역적으로 제공할 수 있는 프로바이더 작성, 컴포넌트 순서 상관X
const ConvertDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [text, setText] = useState<string>('');
  const [characterList, setCharacterList] = useState<string[]>([]);
  const [title, setTitle] = useState<string>('');
  const [script, setScript] = useState<Script>({ scene: [] });

  return (
    <NovelTitleContext.Provider value={{ title, setTitle }}>
      <NovelContext.Provider value={{ text, setText }}>
        <CharacterContext.Provider value={{ characterList, setCharacterList }}>
          <ScriptContext.Provider value={{ script, setScript }}>
            {children}
          </ScriptContext.Provider>
        </CharacterContext.Provider>
      </NovelContext.Provider>
    </NovelTitleContext.Provider>
  );
};

// 컨텍스트 값을 사용하는 커스텀 훅
const useNovelTitleData = () => {
  const context = useContext(NovelTitleContext);
  if (context === undefined) {
    throw new Error(
      'useNovelTitleData must be used within a ConvertDataProvider'
    );
  }
  return context;
};

const useNovelData = () => {
  const context = useContext(NovelContext);
  if (context === undefined) {
    throw new Error('useNovelData must be used within a ConvertDataProvider');
  }
  return context;
};

const useCharaterData = () => {
  const context = useContext(CharacterContext);
  if (context === undefined) {
    throw new Error(
      'useCharaterData must be used within a ConvertDataProvider'
    );
  }
  return context;
};

const useScriptData = () => {
  const context = useContext(ScriptContext);
  if (context === undefined) {
    throw new Error('useScriptData must be used within a ConvertDataProvider');
  }
  return context;
};

export {
  ConvertDataProvider,
  useNovelTitleData,
  useNovelData,
  useCharaterData,
  useScriptData,
};
