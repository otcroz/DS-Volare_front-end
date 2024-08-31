import React from 'react';
import styled from 'styled-components';
import CutItem from './WideCutItem';
import { Cut } from '../../../types/storyboard';

type Props = {
  cuts: Cut[];
}

const CutList = ({ cuts }: Props) => {
  return (
    <GridContainer>
      {cuts.map((cut, index) => (
        <CutItem 
          key={index} 
          data={cut}
        />
      ))}
    </GridContainer>
  );
};

export default CutList;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 1rem;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  box-sizing: border-box;
`;