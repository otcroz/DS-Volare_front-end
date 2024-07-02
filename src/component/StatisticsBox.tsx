import React from 'react';
import styled from 'styled-components';
import ConvertBoxWrapper from './ConvertBoxWrapper';
import {
  TitleText,
  ContentBox,
} from '../styles/convertBoxStyles';

type props = {
  data: string;
};


const StatisticsBox = ({ data }: props) => (
  <ConvertBoxWrapper>
    <TitleText>통계</TitleText>
    <ContentBox>
      
    </ContentBox>
  </ConvertBoxWrapper>
);

export default StatisticsBox;
