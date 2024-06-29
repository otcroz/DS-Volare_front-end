import React from 'react';
import styled from 'styled-components';

const FooterBar = () => (
  <Container>
    <Text>Copyright 2024 Volare</Text>
    <div style={{ flex: 1 }} />
    <Text>Contact: Volare2024ce@gmail.com</Text>
  </Container>
);

// text
const Text = styled.span`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

// container
const Container = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 50px;
  background-color: ${({ theme }) => theme.colors.olive};
`;

export default FooterBar;
