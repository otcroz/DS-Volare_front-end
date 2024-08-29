import React from 'react';
import styled from 'styled-components';
import { StoryboardScene } from '../../../types/storyboard';

type props = {
  data: StoryboardScene;
};

// React component
const StoryboardInfo = ({ data }: props) => {
  return (
    <InfoContainer>
      <StoryboardTitle>(제목)</StoryboardTitle>
      <GridContainer>
        <GridItem bgColor={'lightgray'} fontSize={'large'}>
          Scene
        </GridItem>
        <GridItem colSpan={2}>{data.summary}</GridItem>
        {/* <GridItem>{data.time}</GridItem> */}
        <GridItem bgColor={'lightgray'} fontSize={'large'}>
          Cut
        </GridItem>
        <GridItem bgColor={'lightgray'} fontSize={'large'}>
          #00{data.sceneNum}
        </GridItem>
        <GridItem colSpan={2}>장소: {data.location}</GridItem>
        <GridItem fontSize={'large'}>{data.cutCount}</GridItem>
      </GridContainer>
    </InfoContainer>
  );
};

export default StoryboardInfo;

const InfoContainer = styled.div``;

const StoryboardTitle = styled.div`
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 1px;
  background-color: lightgray;
  border: 1px solid black;
  margin-bottom: 0.5rem;
  width: 100%;
  margin-left: auto;
  align-items: center;
`;

const GridItem = styled.div<{
  rowSpan?: number;
  colSpan?: number;
  bgColor?: string;
  fontSize?: string;
}>`
  text-align: center;
  background-color: ${({ bgColor }) => bgColor || 'white'};
  font-size: ${({ fontSize }) => (fontSize === 'large' ? '1rem' : '0.75rem')};
  grid-column: span ${({ colSpan }) => colSpan || 1};
  grid-row: span ${({ rowSpan }) => rowSpan || 1};
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
