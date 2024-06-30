import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

interface TextProps {
  color: string;
  size: string;
  weight: string;
}

interface ScriptListProps {
  date: string;
  title: string;
}

const ScriptListCard = (props: { item: ScriptListProps }) => {
  const { title, date } = props.item;
  return (
    <CardBox>
      <Image />
      <ContentBox>
        <Text color={theme.colors.darkBrown} size={'0.9rem'} weight={'normal'}>
          {date}
        </Text>
        <div style={{ flex: 1 }} />
        <Text
          style={{ textAlign: 'right' }}
          color={theme.colors.darkOlive}
          size={'0.9rem'}
          weight={'normal'}
        >
          {title}
        </Text>
      </ContentBox>
    </CardBox>
  );
};

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
  border-radius: 1.2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05), 0 6px 6px rgba(0, 0, 0, 0.1);
`;

const ContentBox = styled.div`
  display: flex;
  padding: 0.7rem 1rem;
`;

// component
const Image = styled.img`
  width: 260px;
  height: 150px;
  border-radius: 1.2rem 0.7rem 0.7rem 0.7rem;
  background-color: white;
`;

export default ScriptListCard;
