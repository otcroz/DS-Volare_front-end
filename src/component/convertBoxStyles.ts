import styled from 'styled-components';

export const TitleText = styled.div`
  font-weight: bold;
  color: white;
  font-size: 1.75rem;
  padding: 1rem;
`;

export const ContentBox = styled.div`
  background-color: white;
  width: 35rem;
  height: 35rem;
  border-radius: 1.25rem;
  padding: 1.25rem;
`;

export const TutorialBox = styled.div`
  width: 80%;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 1.25rem;
  text-align: center;
  margin: 20% 0;
`;

export const TutorialTitle = styled.h1`
  font-size: 1.25rem;
  color: #4f493d;
  margin: 2rem 0;
`;

export const TutorialText = styled.p`
  font-size: 1rem;
  color: #4f493d;
  line-height: 2;
  text-align: center;
  margin: 2rem;
`;

export const HighlightedText = styled.span`
  color: #d35400;
  font-weight: bold;
`;

export const ConvertButton = styled.button`
  background: linear-gradient(90deg, #ea7333, #84411d);
  color: #ffffff;
  border: none;
  border-radius: 3rem;
  padding: 1rem 3rem;
  cursor: pointer;
  font-size: 1.25rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const FileButton = styled.div`
  width: 12.5rem;
  text-align: center;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 0.75rem;
  background-color: #BB4E11;
  border-radius: 0.625rem 0.625rem 0 0;
  position: absolute;
  top: 2.2rem;
  right: 3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`