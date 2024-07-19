import React, { useState } from 'react';
import styled from 'styled-components';
import bgImg from '../assets/background/bg-1.png';
import Pagenation from '../component/Pagenation';
import ScriptListCard from '../component/ScriptListCard';
import { dummyData } from '../component/mypageDummyData'; // dummy data

interface ScriptListProps {
  date: string;
  title: string;
}

const MyPage = () => {
  const [page, setPage] = useState<number>(1);
  const totalScript = dummyData.length; // 총 게시물 수
  const pageRange = 6; // 페이지당 보여줄 게시물 수
  const startPost = (page - 1) * pageRange + 1; // 시작 게시물 번호
  const endPost = startPost + pageRange - 1; // 끝 게시물 번호

  const ScriptListfunc = (data: ScriptListProps[]) => {
    // if data.length >= 6
    const list = data.slice(startPost - 1, endPost).map((item, index) => {
      return <ScriptListCard key={index} date={item.date} title={item.title} />;
    });

    // if data.length < 6

    return list;
  };

  return (
    <Background>
      <BackgroundImage>
        <BackgroundCover>
          <LayoutWrapper>
            <UserInfoTextBox>
              <TitleText style={{ fontSize: '20px' }}>
                asfg1234@gmail.com
              </TitleText>
              <TitleText style={{ fontSize: '40px' }}>Works</TitleText>
            </UserInfoTextBox>
            {/* scripts list */}
            <ListContainer>
              <ItemsContainer>{ScriptListfunc(dummyData)}</ItemsContainer>
              <div style={{ flex: 1 }} />
              <Pagenation
                page={page}
                setPage={setPage}
                totalScript={totalScript}
                pageRange={pageRange}
              />
            </ListContainer>
          </LayoutWrapper>
        </BackgroundCover>
      </BackgroundImage>
    </Background>
  );
};

// text
const TitleText = styled.span`
  color: white;
  font-weight: bold;
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
  top: -3.5rem;
`;

export default MyPage;
