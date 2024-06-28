// color
const colors = {
  /*예시 색상 작성, 추후에 삭제*/
  slate50: '#f8fafc',
  slate100: '#f1f5f9',
  slate200: '#e2e8f0',
  /* 나머지 색상들 생략 ( https://tailwindcss.com/docs/customizing-colors ) */

  /* 아래 부분을 비워둔 이유는 타입때문 ( "<ThemeProvider>"에서 조건에 따라 다르게 값을 채움 ) */
  color: '',
  bgColor: '',
  gray: '',
};

// 검정 배경
export const darkTheme = {
  color: '#000000',
  bgColor: '#FFFFFF',
  gray: '#343434',
};
// 흰색 배경
export const lightTheme = {
  color: '#FFFFFF',
  bgColor: '#000000',
  gray: '#D9D9D9',
};

const mediaSize = {
  xs: "screen and (max-width: '400px')",
  sm: "screen and (max-width: '640px')",
  md: "screen and (max-width: '768px')",
  lg: "screen and (max-width: '1024px')",
  xl: "screen and (max-width: '1280px')",
  '2xl': "screen and (max-width: '1536px')",
};

// 폰트 크기
const fontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
};

// 그 외의 크기
const size = {
  xs: '0.2em',
  sm: '0.4em',
  md: '0.6em',
  lg: '1em',
  xl: '1.4em',
  '2xl': '1.6em',
};

const theme = {
  colors,
  mediaSize,
  fontSize,
  size,
  darkTheme,
  lightTheme,
};

export default theme;

// 타입 재정의, styled-components 변수 타입 자동완성
export type Theme = typeof theme;
