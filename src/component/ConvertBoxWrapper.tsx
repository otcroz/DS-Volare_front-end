import React from 'react';
import styled, { css } from 'styled-components';

interface GlassBoxProps {
  boxtype: 'tutorial' | undefined;
}

type props = {
    children: React.ReactNode;
    mode?: 'tutorial' | undefined;
  };

const ConvertBoxWrapper = ({ children, mode }: props) => {
  return (
    <>
    <GlassBox boxtype={mode}>
        {children}
    </GlassBox>
  </>
  )
};

export default ConvertBoxWrapper;

const GlassBox = styled.div<GlassBoxProps>`
  width: 41rem;
  height: 45rem;
  background: rgba(255, 252, 245, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 30px;  
  padding: 1.5rem;

  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

  ${({ boxtype }) =>
    boxtype === 'tutorial' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
    `}
  
`
