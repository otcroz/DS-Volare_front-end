import React from 'react';
import styled from 'styled-components';
import { Cut } from '../../../types/storyboard';

type Props = {
  data: Cut;
};

const CutItem = ({ data }: Props) => {
  return (
    <GridItem>
      <CutNum>&nbsp;{data.cut_num}&nbsp;</CutNum>
      <CutImg src={data.cut_image} />
      <CutText>{data.text}</CutText>
    </GridItem>
  );
};

export default CutItem;

const CutImg = styled.img`
  background-color: lightgray;
  width: 100%;
`;

const CutText = styled.div`
  width: 100%;
  line-height: 1.5rem;
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
`;

const CutNum = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  background-color: black;
  color: white;
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  text-align: center;
`

const GridItem = styled.div<{
  $rowSpan?: number;
  $colSpan?: number;
  $fontSize?: string;
}>`
  position: relative;
  text-align: left;
  background-color: white;
  font-size: ${({ $fontSize }) => ($fontSize === 'large' ? '1.25rem' : '1rem')};
  grid-column: span ${({ $colSpan }) => $colSpan || 1};
  grid-row: span ${({ $rowSpan }) => $rowSpan || 1};
  height: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
`;
