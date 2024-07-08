import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

interface IndicatorProps {
  // 모든 단계를 거쳤는지 여부
  step: boolean[]; // 현재 사용자가 위치한 단계
  select: number;
  setSelect: (select: number) => void;
}

interface boxProps {
  selected: number;
  index: number;
  step: boolean;
}

const ConvertIndicator = ({ step, select, setSelect }: IndicatorProps) => {
  const stepNameList: string[] = ['소설', '대본', '스토리보드', '통계'];

  return (
    <IndicatorContainer>
      {stepNameList.map((item, index) => {
        return (
          <IndicatorBox
            step={step[index]}
            key={index}
            selected={select}
            index={index}
            onClick={() => setSelect(index)}
          >
            {item}
          </IndicatorBox>
        );
      })}
    </IndicatorContainer>
  );
};

const IndicatorContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const IndicatorBox = styled.div<boxProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 7vw;
  max-width: 120px;
  height: 30px;
  padding: 1.1rem;

  background-color: ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.brown};
  font-weight: bold;

  ${({ selected, index, step, theme }) => css`
    ${step &&
    css`
      background-color: ${theme.colors.orange};
      color: white;
    `}

    ${selected === index &&
    css`
      background-color: ${theme.colors.darkOrange};
      color: white;
    `}
  `}
`;

export default ConvertIndicator;
