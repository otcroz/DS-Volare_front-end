import React from 'react';
import styled from 'styled-components';
import bgImg from '../assets/background/bg-1.png';
import Pagenation from '../component/Pagenation';
import ScriptListCard from '../component/ScriptListCard';

interface TextProps {
  color: string;
  size: string;
  weight: string;
}

interface ScriptListProps {
  date: string;
  title: string;
}

// 더미 데이터
let data = [
  {
    title: '소나기',
    date: '2024-05-06',
  },
  {
    title: '인간관계론',
    date: '2024-03-04',
  },
  {
    title: '제노사이드',
    date: '2024-02-04',
  },
  {
    title: '나미야 잡화점의 기적',
    date: '2023-12-15',
  },
  {
    title: '타이틀 테스트입니다',
    date: '2023-05-06',
  },
  {
    title: '제목이 잘 나오는지 확인합니다',
    date: '2023-05-06',
  },
];

const ScriptListfunc = (data: ScriptListProps[]) => {
  // if data.length >= 6
  const list = data.map((item, index) => {
    return <ScriptListCard key={index} item={item} />;
  });

  // if data.length < 6

  return list;
};

const MyPage = () => (
  <Background>
    <BackgroundImage>
      <BackgroundCover>
        <LayoutWrapper>
          <UserInfoTextBox>
            <Text color={'white'} size={'20px'} weight={'bold'}>
              asfg1234@gmail.com
            </Text>
            <Text color={'white'} size={'40px'} weight={'bold'}>
              Works
            </Text>
          </UserInfoTextBox>
          {/* scripts list */}
          <ListContainer>
            <ItemsContainer>{ScriptListfunc(data)}</ItemsContainer>
            <div style={{ flex: 1 }} />
            <Pagenation />
          </ListContainer>
        </LayoutWrapper>
      </BackgroundCover>
    </BackgroundImage>
  </Background>
);

// text
const Text = styled.span<TextProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

// background
const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.beige};
  height: 100vh;
`;

const BackgroundImage = styled.p`
  display: flex;
  height: 75vh;
  background-image: url(${bgImg});
  background-size: cover;
`;

const BackgroundCover = styled.p`
  flex: 1;
  background-color: #a6a29a66;
  backdrop-filter: blur(3px);
`;

// wrapper, container
const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5vw;
`;

const ListContainer = styled.div`
  display: flex;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 60px 70px;
`;

const UserInfoTextBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  top: -4.5rem;
`;

export default MyPage;
