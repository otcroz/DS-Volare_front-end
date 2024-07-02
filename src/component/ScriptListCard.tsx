import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

interface ScriptListProps {
  date: string;
  title: string;
}

const ScriptListCard = ({ date, title }: ScriptListProps) => {
  return (
    <CardBox>
      <Image />
      <ContentBox>
        <ContentText style={{ color: theme.colors.darkBrown }}>
          {date}
        </ContentText>
        <div style={{ flex: 1 }} />
        <ContentText
          style={{ textAlign: 'right', color: theme.colors.darkOlive }}
        >
          {title}
        </ContentText>
      </ContentBox>
    </CardBox>
  );
};

// text
const ContentText = styled.span`
  width: 200px;
  font-size: 0.9rem;
`;

// box
const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  background-color: rgba(255, 255, 245, 0.6);
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
