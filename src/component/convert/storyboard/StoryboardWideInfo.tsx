import React from 'react';
import styled from 'styled-components';
import { StoryboardScene } from '../../../types/storyboard';

type props = {
  data: StoryboardScene;
};

// React component
const StoryboardInfo = ({ data }: props) => {
  return (
      <GridContainer>
        <GridItem $bgColor={'lightgray'} $fontSize={'large'}>
          Scene #{data.scene_num}
        </GridItem>
        <GridItem $textAlign={'left'}>    장소: {data.location}    /    {data.summary}</GridItem>
        
        <GridItem $bgColor={'lightgray'} $fontSize={'large'}>
          cuts : {data.cutCount}
        </GridItem>
      </GridContainer>
  );
};

export default StoryboardInfo;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: repeat(2, auto);
  background-color: lightgray;
  border: 1px solid gray;
  width: 100%;
  margin-left: auto;
  align-items: center;
`;

const GridItem = styled.div<{
  $rowSpan?: number;
  $colSpan?: number;
  $bgColor?: string;
  $fontSize?: string;
  $textAlign?: string;
}>`
  background-color: ${({ $bgColor }) => $bgColor || 'white'};
  font-size: ${({ $fontSize }) => ($fontSize === 'large' ? '1.25rem' : '1rem')};
  grid-column: span ${({ $colSpan }) => $colSpan || 1};
  grid-row: span ${({ $rowSpan }) => $rowSpan || 1};
  height: 1.75rem;
  display: flex;
  justify-content: ${({ $textAlign }) => $textAlign || 'center'};
  align-items: center;
`;
