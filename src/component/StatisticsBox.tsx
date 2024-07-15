import React, { forwardRef } from 'react';
import styled from 'styled-components';
import ConvertBoxWrapper from './ConvertBoxWrapper';
import { TitleText, ContentBox } from '../styles/convertBoxStyles';

type props = {
  data: string;
};

const StatisticsBox = forwardRef<HTMLDivElement, props>(({ data }, ref) => (
  <div ref={ref}>
    <ConvertBoxWrapper>
      <TitleText>통계</TitleText>
      <ContentBox></ContentBox>
    </ConvertBoxWrapper>
  </div>
));

export default StatisticsBox;
