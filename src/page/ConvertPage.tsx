import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ConvertIndicator from '../component/ConvertIndicator';
import NovelBox from '../component/NovelBox';
import CharacterBox from '../component/CharacterBox';
import ScriptBox from '../component/ScriptBox';
import StoryboardBox from '../component/StoryboardBox';
import StatisticsBox from '../component/StatisticsBox';

// dummy
const PageContainer = styled.div`
  width: 4000px;
  height: 98vh;
`
// dummy
const ComponentContainer = styled.div`
  width: 4000px;
  height: 100%;
  background-color: gray;
  display: flex;
  justify-content: space-around;
`
const ConvertPage = () => {

  return (
    <PageContainer>
      <ComponentContainer>
        <NovelBox data="novel" />
        <CharacterBox data="character" />
        <ScriptBox data="script" />
        <StoryboardBox data="" />
        <StatisticsBox data="" />
      </ComponentContainer>
    </PageContainer>
  );
};

export default ConvertPage;
