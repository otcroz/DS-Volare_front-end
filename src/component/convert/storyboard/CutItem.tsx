import React from 'react';
import styled from 'styled-components';
import { Cut } from '../../../types/storyboard';

type Props = {
  data: Cut;
};

const CutItem = ({ data }: Props) => {
  return (
    <StyledListItem>
      <LeftWrapper>
        <LeftHeader>
          <CutNumber>cut#{data.cutNum}</CutNumber>
          <div style={{ flex: 1 }} />
          {/* <CameraAngle>{data.angleCam}</CameraAngle> */}
        </LeftHeader>
        <CutImg src={data.cutImage} />
      </LeftWrapper>
      <RightWrapper>
        <RightHeader>액션&대사</RightHeader>
        <CutText>{data.text}</CutText>
      </RightWrapper>
    </StyledListItem>
  );
};

export default CutItem;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: row;
  border: 1px solid #000;
  background-color: #fff;
  height: 200px;
`;

const LeftWrapper = styled.div`
  flex: 6;
  height: 100%;
`;

const LeftHeader = styled.div`
  display: flex;
  width: 100%;
  height: 1.5rem;
  padding: 0.25rem;
  border-bottom: 1px solid #000;
  border-right: 1px solid #000;
  align-items: center;
`;

const CutNumber = styled.div`
  font-size: 0.75rem;
`;

const CameraAngle = styled.div`
  font-size: 0.75rem;
`;

const CutImg = styled.img`
  background-color: lightgray;
  height: calc(100% - 1.5rem);
`;

const RightWrapper = styled.div`
  flex: 4;
`;

const RightHeader = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  height: 1.5rem;
  border-bottom: 1px solid #000;
  align-items: center;
  justify-content: center;
`;

const CutText = styled.div`
  width: 100%;
  line-height: 1rem;
  font-size: 0.75rem;
  padding: 0.25rem;
`;
