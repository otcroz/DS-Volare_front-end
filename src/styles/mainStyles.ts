import styled from 'styled-components';

interface textProps {
  page: string;
}

// text
export const TitleText = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkBrown};
  font-size: 4rem;
  line-height: 1.2;
`;

export const SubTitleText = styled.span<textProps>`
  font-weight: bold;
  color: ${({ page, theme }) =>
    page === 'first' ? 'white' : theme.colors.darkBrown};
  font-size: ${({ page }) => (page === 'first' ? '1.5rem' : '1.2rem')};
  line-height: 1.2;
`;

export const ContentText = styled.span<textProps>`
  color: ${({ page, theme }) =>
    page === 'first' ? 'white' : theme.colors.darkBrown};
  font-size: 1rem;
  line-height: 1.2;
`;

// wrapper, container, box
export const ExplainGridBox = styled.div<textProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;

  position: absolute;
  bottom: ${({ page }) => (page === 'second' ? '5rem' : '11rem')};
  right: 7vw;
  width: 20vw;
  height: 20vh;
  z-index: 1;
  padding: 1rem;

  backdrop-filter: blur(25px);
  background-color: rgb(255, 255, 255, 0.4);

  border-style: solid;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.35);
  border-radius: 1rem;
`;
