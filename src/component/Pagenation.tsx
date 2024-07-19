import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as PagePrev } from '../assets/icons/page_prev_icon.svg';
import { ReactComponent as PageNext } from '../assets/icons/page_next_icon.svg';

type pagenationProps = {
  page: number;
  setPage: (page: number) => void;
  totalScript: number;
  pageRange: number;
};

const Pagenation = ({
  page,
  setPage,
  totalScript,
  pageRange,
}: pagenationProps) => {
  const btnRange = 5;
  const currentSet = Math.ceil(page / btnRange); // 현재 버튼이 몇번째 세트인지 나타내는 수
  const startPage = (currentSet - 1) * btnRange + 1; // 현재 보여질 버튼의 첫번째 수
  const endPage = startPage + btnRange - 1; // 현재 보여질 끝 버튼의 수
  const totalSet = Math.ceil(Math.ceil(totalScript / pageRange) / btnRange); // 전체 벼튼 세트 수

  const pageItems = Array(btnRange)
    .fill(startPage)
    .map((_, index) => {
      return (
        <PageItem
          key={index}
          onClick={() => setPage(startPage + index)}
          $active={page === startPage + index}
        >
          {startPage + index}
        </PageItem>
      );
    });
  return (
    <PagenationWrapper>
      {currentSet > 1 && (
        <ArrowButton onClick={() => setPage(startPage - 1)}>
          <PagePrev />
        </ArrowButton>
      )}
      <PagenationContainer>{pageItems}</PagenationContainer>
      {totalSet > currentSet && (
        <ArrowButton onClick={() => setPage(endPage + 1)}>
          <PageNext />
        </ArrowButton>
      )}
    </PagenationWrapper>
  );
};

// wrapper, container
const PagenationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const PagenationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

// component
const PageItem = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.colors.ivory};
  color: ${({ theme }) => theme.colors.brown};

  ${(props) =>
    props.$active &&
    css`
      width: 3.5rem;
      height: 3.5rem;
      font-size: 1.2rem;
      background-color: ${({ theme }) => theme.colors.orange};
      color: ${({ theme }) => theme.colors.ivory};
    `}
`;

const ArrowButton = styled.button`
  button-style: none;
`;

export default Pagenation;
