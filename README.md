<div align="center">
	개발자 <strong>otcroz(유수연)</strong>의 레포지토리입니다. <br />
	프로젝트 소개와 함께 제가 담당한 기능과 트러블슈팅을 담았습니다.
</div>

___
![image](https://github.com/user-attachments/assets/e9c9075d-45ca-4a87-8e8e-8d9f104f7d72)

## Plotter, 자연어 처리 기반 소설 IP 확장 솔루션

	
`#소설 IP 확장` `#소설의 대본화` `#스토리보드 생성`  <br /> <br />
사용자가 작성한 **소설을 대본으로 변환하고 변환된 대본으로 스토리보드를 생성하는 알고리즘**을 통해 제작 과정을 자동화하고  <br />
더불어 드라마, 영화, 연극 등의 시청각 창작물 제작을 위한 토대를 마련해줍니다.


- 2024 덕성여대 컴퓨터공학전공 졸업 프로젝트
- 2024 ICT멘토링 이브와 공모전 출품작
- 개발 기간: 2024.02 ~ 2024.11(진행 중)
- 개발 인원: 4명(Team Leader) <br />
- 담당 스택: `ReactJS(Typescript)` `NLP`


<br />

## Preview


https://github.com/user-attachments/assets/d16cb270-8ca9-478f-b436-f275e300ab56



<br />

## ✨담당 기능

| ![image](https://github.com/user-attachments/assets/ccf2ed1f-80d0-4f47-a1f9-fdf4f5218a00)| ![image](https://github.com/user-attachments/assets/111941ce-482d-4c69-a49f-7e55bd1283b3)|![image](https://github.com/user-attachments/assets/bc363e41-73d4-44c1-9fa6-d15a0012d18b)|
| :-----: | :-----: | :-----: |
| 메인: 서비스 소개 | 메인: 대본화 demo  | 메인: 서비스 사용 방법 |  
|서비스에 대한 소개| 예시로 주어진 소설을 대본으로 변환하는 <br> 체험을 할 수 있으며, 비회원도 체험 가능| 서비스 사용 방법 작성 및 <br> 로그인 창으로 이동 | 

| ![image](https://github.com/user-attachments/assets/8b111109-5b4d-47bc-a645-7e5ebd3732a2)|![image](https://github.com/user-attachments/assets/92d1b1d3-363e-450e-bfab-4fa314831ed6) | ![image](https://github.com/user-attachments/assets/363af14c-e142-46a5-a0c2-d473d5db540d) |
| :-----: | :-----: | :-----: |
| 변환 페이지 데이터 관리(소설 작성 ~ 대본화)  | 로그인&로그아웃 | 마이페이지 |
| context API를 사용하여 변환 페이지에서의 <br> 데이터 전역 관리 | 로그인 & 로그아웃 구현| 사용자가 생성한 변환 정보를 <br> 열람할 수 있음 |

### 이외의 구현한 기능
- 프로젝트 세팅: `styled-components`, `style-reset`을 사용하여 기본 스타일 리셋 및 전역 스타일 설정, 테마 설정
- `framer-motion`을 사용하여 컴포넌트 전환 애니메이션 구현
- 사용자에게 현재 상황을 알려주기 위해 토스트 구현, 뒤로가기 또는 새로고침시 모달 띄우기

<br />

## 🚨Trouble Shotting

### 1. 변환 페이지에서의 컴포넌트 복잡성 해결, 데이터 관리 방법
1) 1개의 컴포넌트에서 코드를 작성하여 복잡도가 높아짐
 - 💡여러 개의 하위 컴포넌트로 구성하여 복잡도를 낮춤
2) 하위 컴포넌트에 값을 전달하기 위해 props를 사용하는 방법이 있지만, props가 많아질수록 props를 추적하기 어려움
 - 💡 Context API를 사용하여 데이터를 전역적으로 선언
 - 💡 하위 컴포넌트로 전달하는 props의 수가 줄어듦 (8개 → 3~4개)
 - 🔎 관련 이슈: https://github.com/DS-Volare/front-end/issues/44
### 2. 로그인/로그아웃 기능 구현에서의 문제
<img src="https://github.com/user-attachments/assets/fbc34fed-b532-44f4-9854-3587a0ae0894" width="500px"/> <br/>
1) 백엔드 팀에서 구현한 로그인 API를 프론트 서버에서 연결하려고 했지만 `axios`를 사용하여 연결하는 방법으로 구현되지 않음
 - 💡 window.location.href = /spring/oauth/authorize/${endpoint} 코드로 소셜 로그인 페이지에 이동
2) 프론트 서버 내에서 response로 access token과 refresh token을 받을 수 없음
 - 💡 rollback 함수를 구현하여 만약 업데이트가 성공적으로 이루어지지 않았을 경우 화면이 변경되지 않도록 구현
 - 💡 오류가 발생하는 원인과 결과를 백엔드 팀에게 전함. 프론트 팀에서 원하는 API의 호출과 반환 방법 제시

   - Spring boot에서 토큰에 대한 반환값을 헤더가 아닌 **쿠키**로 반환하도록 함.
   - 프론트는 백엔드에서 보내준 쿠키에서 토큰값을 받아 **로컬 스토리지**에 저장
 - 📝 요청 내용: [네이버, 구글 로그인 API 요청(프론트 → 백엔드)](https://otcrotcr.notion.site/API-07219c0b85ac41dea0405ae715b7d740?pvs=4)
<br />

___

## Installation

### Setup
For building and running the application you need:
- Node.js 16.17.0
- Npm 8.15.0

### Client
```
$ git clone https://github.com/DS-Volare/front-end.git
$ npm i
$ npm start
```


