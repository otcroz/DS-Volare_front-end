import React from 'react';
import styled from 'styled-components';
import CutItem from './CutItem';
import { Cut } from '../../../types/storyboard';

type Props = {
  cuts: Cut[];
}

const CutList = ({ cuts }: Props) => {
  return (
    <ListContainer>
      {cuts.map((cut, index) => (
        <CutItem 
          key={index} 
          data={cut}
        />
      ))}
    </ListContainer>
  );
};

export default CutList;

const ListContainer = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  display: flex;
  flex-direction: column;
`;
