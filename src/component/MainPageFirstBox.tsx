import React from 'react';
import styled, { css } from 'styled-components';
import { TitleText, SubTitleText, ContentText } from '../styles/mainStyles';

const MainPageFirstBox = () => {
  const blank = '\u00A0\u00A0\u00A0';
  return (
    <LayoutWrapper>
      <TitleText>: Plotter</TitleText>
      <IntroduceBox>
        <ServiceLogo />
        <ContentBox>
          <SubTitleContentBox>
            <SubTitleText page={'first'}>소설을 대본으로</SubTitleText>
            <ContentText page={'first'}>
              {blank}소설을 작성하면 대본으로 변환됩니다.
            </ContentText>
          </SubTitleContentBox>
          <SubTitleContentBox>
            <SubTitleText page={'first'}>스토리보드 생성</SubTitleText>
            <ContentText page={'first'}>
              {blank}변환된 대본을 기반으로 스토리보드를 생성합니다.
            </ContentText>
          </SubTitleContentBox>
          <SubTitleContentBox>
            <SubTitleText page={'first'}>챗봇으로 대본 보완하기</SubTitleText>
            <ContentText page={'first'}>
              {blank}챗봇에게 도움을 받아 대본을 보완할 수 있습니다.
            </ContentText>
          </SubTitleContentBox>
        </ContentBox>
      </IntroduceBox>
    </LayoutWrapper>
  );
};

// container
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 6rem;
  gap: 3rem;
`;

const IntroduceBox = styled.div`
  display: flex;
  gap: 4rem;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const SubTitleContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// compoenent
const ServiceLogo = styled.image`
  width: 15rem;
  height: 15rem;
  border-radius: 1rem;
  background-color: gray;
`;

export default MainPageFirstBox;
