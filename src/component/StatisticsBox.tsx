import React, { forwardRef } from 'react';
import styled from 'styled-components';
import ConvertBoxWrapper from './ConvertBoxWrapper';
import { TitleText, ContentBox } from '../styles/convertBoxStyles';

type props = {
  data: string;
  style?: React.CSSProperties;
};

const StatisticsBox = forwardRef<HTMLDivElement, props>(
  ({ data, style }, ref) => (
    <div ref={ref} style={style}>
      <ConvertBoxWrapper>
        <TitleText>통계</TitleText>
        <ContentBox></ContentBox>
      </ConvertBoxWrapper>
    </div>
  )
);

export default StatisticsBox;
