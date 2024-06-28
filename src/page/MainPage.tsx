import React from 'react';
import FooterBar from '../component/Footerbar';
import styled from 'styled-components';

const MainPage = () => (
  <>
    <MainContainer>
      <div>Hello</div>
    </MainContainer>
    <FooterBar />
  </>
);

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainPage;
