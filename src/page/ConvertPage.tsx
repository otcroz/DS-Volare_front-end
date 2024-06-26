import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ConvertIndicator from '../component/ConvertIndicator';
import NovelBox from '../component/NovelBox';
import CharacterBox from '../component/CharacterBox';
import ScriptBox from '../component/ScriptBox';
import StoryboardBox from '../component/StoryboardBox';
import StatisticsBox from '../component/StatisticsBox';

const PageContainer = styled.div`
  width: 4000px;
  height: 1000px;
`
// height 100%으로 설정하고 싶은데 어떻게 하지
const ComponentContainer = styled.div`
  width: 4000px;
  height: 100%;
  background-color: gray;
  display: flex;
  justify-content: space-around;
`
const ConvertPage = () => {
  const [characterList, setCharacterList] = useState<string>("뭔데");

  return (
    <PageContainer>
      <ComponentContainer>
        <NovelBox data="data" />
        <CharacterBox data="data" characterList={characterList} />
        <ScriptBox data="data" />
        <StoryboardBox data="data" />
        <StatisticsBox data="data" />
      </ComponentContainer>
    </PageContainer>
  );
};

export default ConvertPage;
