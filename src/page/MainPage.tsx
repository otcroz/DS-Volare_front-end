import FooterBar from '../component/base/Footerbar';
import styled, { css } from 'styled-components';
import bgImgFirst from '../assets/background/bg-2.png';
import bgImgSecond from '../assets/background/bg-3.png';
import bgImgThird from '../assets/background/bg-4.png';
import { useState, WheelEvent, useEffect } from 'react';
import MainIndicator from '../component/mainpage/MainIndicator';
import MainPageFirstBox from '../component/mainpage/MainPageFirstBox';
import MainPageSecondBox from '../component/mainpage/MainPageSecondBox';
import MainPageThirdBox from '../component/mainpage/MainPageThirdBox';
import { motion, useAnimation } from 'framer-motion';
import axios from 'axios';

type pageProps = {
  page: number;
};

const MainPage = () => {
  const [page, setPage] = useState(1); // 화면 전환 state

  const controls = useAnimation(); // 화면 전환 애니메이션 컨트롤
  const indicatorControls = useAnimation(); // 인디케이터 애니메이션 컨트롤

  // scroll transition && animation
  const handleScroll = (event: React.WheelEvent) => {
    // 인디케이터 애니메이션 동작
    if ((event.deltaY > 0 && page < 3) || (event.deltaY < 0 && page > 1)) {
      indicatorControls
        .start({
          y: 0,
          transition: { type: 'spring', stiffness: 100 },
        })
        .then(() => {
          // 애니메이션 재시작
          indicatorControls.start({
            y: 10,
            transition: { type: 'spring', stiffness: 100 },
          });
        });

      // 메인페이지 화면 전환
      controls
        .start({
          opacity: 0,
          transition: { duration: 0.5 },
        })
        .then(() => {
          if (event.deltaY > 0 && page < 3) {
            setPage((prevPage) => prevPage + 1);
          } else if (event.deltaY < 0 && page > 1) {
            setPage((prevPage) => prevPage - 1);
          }

          // 애니메이션 재시작
          controls.start({
            opacity: 1,
            transition: { duration: 0.5 },
          });
        });
    }
  };

  const pageTransitionFunc = () => {
    switch (page) {
      case 1:
        return <MainPageFirstBox />;
      case 2:
        return <MainPageSecondBox />;
      case 3:
        return <MainPageThirdBox />;
    }
  };

  // api test
  const testFlaskAPI = async () => {
    const result = await axios.get('/flask/');
    const data = result.data;
    console.log('flask data: ', data);
    return data;
  };

  const testSpringAPI = async () => {
    const result = await axios.get('/spring/');
    const data = result.data;
    console.log('spring data: ', data);
    return data;
  };
  useEffect(() => {
    testFlaskAPI();
    testSpringAPI();
  }, []);

  return (
    <>
      <Background onWheel={handleScroll}>
        <BackgroundImage page={page}>
          <BackgroundCover page={page}>
            <LayoutWrapper>
              {/* main content box */}
              <IntroduceContainer animate={controls}>
                {pageTransitionFunc()}
              </IntroduceContainer>
              {/* indicator */}
              <div style={{ flex: 1 }} />
              <MainIndicator
                page={page}
                setPage={setPage}
                controls={indicatorControls}
              />
            </LayoutWrapper>
          </BackgroundCover>
        </BackgroundImage>
      </Background>
      <FooterBar />
    </>
  );
};

// wrapper, container
const LayoutWrapper = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 5vh 5vw;
`;

const IntroduceContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70vw; // before 1450px;
  height: 70vh; // before 700px;
  background-color: rgba(255, 255, 245, 0.6);
  padding: 3vh 3vw;

  border-style: solid;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.35);
  border-radius: 1.2rem;
`;

// background
const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${css`
    height: calc(100vh - 160px);
  `}
`;

const BackgroundImage = styled.p<pageProps>`
  display: flex;
  flex: 1;
  background-size: cover;
  ${({ page }) => {
    switch (page) {
      case 1:
        return css`
          background-image: url(${bgImgFirst});
        `;
      case 2:
        return css`
          background-image: url(${bgImgSecond});
        `;
      case 3:
        return css`
          background-image: url(${bgImgThird});
        `;
    }
  }}
`;

const BackgroundCover = styled.p<pageProps>`
  display: flex;
  flex: 1;
  backdrop-filter: blur(3px);
  ${({ page }) => {
    switch (page) {
      case 1:
        return css`
          background-color: rgba(79, 73, 61, 0.6);
        `;
      case 2:
        return css`
          background-color: rgba(181, 181, 181, 0.5);
        `;
      case 3:
        return css`
          background-color: rgba(255, 252, 245, 0.5);
        `;
    }
  }}
`;

export default MainPage;
