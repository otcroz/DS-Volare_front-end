import FooterBar from '../component/base/Footerbar';
import styled, { css } from 'styled-components';
import bgImgFirst from '../assets/background/bg-2.png';
import bgImgSecond from '../assets/background/bg-3.png';
import bgImgThird from '../assets/background/bg-4.png';
import MainIndicator from '../component/mainpage/MainIndicator';
import MainPageFirstBox from '../component/mainpage/MainPageFirstBox';
import MainPageSecondBox from '../component/mainpage/MainPageSecondBox';
import MainPageThirdBox from '../component/mainpage/MainPageThirdBox';
import { motion } from 'framer-motion';
import {
  useMainAnimationContext,
  usePageContext,
} from '../context/mainAnimationContext';
import { useScreenTransitionAnimation } from '../hooks/useScreenTransitionAnimation';

type pageProps = {
  page: number;
};

const MainPage = () => {
  const { page } = usePageContext();
  const { controlScreen } = useMainAnimationContext(); // 애니메이션을 적용할 컨트롤러 context
  const { transitionWheelAnimation } = useScreenTransitionAnimation();

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

  return (
    <>
      <Background onWheel={transitionWheelAnimation}>
        <BackgroundImage page={page}>
          <BackgroundCover page={page}>
            <LayoutWrapper>
              {/* main content box */}
              <IntroduceContainer animate={controlScreen}>
                {pageTransitionFunc()}
              </IntroduceContainer>
              {/* indicator */}
              <div style={{ flex: 1 }} />
              <MainIndicator />
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

const BackgroundImage = styled.div<pageProps>`
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

const BackgroundCover = styled.div<pageProps>`
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
