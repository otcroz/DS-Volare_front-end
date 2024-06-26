import React from 'react';
import styled from 'styled-components';
import ConvertBoxWrapper from './ConvertBoxWrapper';

const TitleText = styled.div`
  color: white;
  font-size: 28px;
  padding: 15px;
`

const ContentBox = styled.div`
  background-color: white;
  width: 600px;
  height: 600px;
  border-radius: 20px;
`

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
