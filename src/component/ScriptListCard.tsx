import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

interface TextProps {
  color: string;
  size: string;
  weight: string;
}

const ScriptListCard = () => (
  <CardBox>
    <Image />
    <ContentBox>
      <Text color={theme.colors.darkBrown} size={'1rem'} weight={'normal'}>
        2024-06-29
      </Text>
      <div style={{ flex: 1 }} />
      <Text
        style={{ textAlign: 'right' }}
        color={theme.colors.darkOlive}
        size={'1rem'}
        weight={'normal'}
      >
        흔들리는 꽃들 속에서 내 샴푸향이 느껴진거야
      </Text>
    </ContentBox>
  </CardBox>
);

// text
const Text = styled.span<TextProps>`
  width: 200px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

// box
const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.beige + 'aa'};
  border-radius: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
`;

const ContentBox = styled.div`
  display: flex;
  padding: 1rem 2rem;
`;

// component
const Image = styled.img`
  width: 260px;
  height: 150px;
  border-radius: 1.5rem 1.2rem 1.2rem 1.2rem;
  background-color: white;
`;

export default ScriptListCard;
