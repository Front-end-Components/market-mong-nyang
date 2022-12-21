# 🐶 마켓멍냥 🐱

React.js 와 REST API 를 활용한 반려동물 용품 쇼핑몰 프로젝트

- 배포 링크 : [마켓멍냥](https://market-mong-nyang.netlify.app/)
- 원본 사이트 : [마켓컬리](https://www.kurly.com/main)
- 상품 출처 : [비엔비엔](https://www.bienbien.kr/main/index.php)

## 사용기술

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) 
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white) 
![SCSS](https://img.shields.io/badge/SCSS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) 
![Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=Swiper&logoColor=white)

## 팀원

|                     [박정민](https://github.com/plou102)                      |                  [안가을](https://github.com/autumnly1007)                   |                    [우지수](https://github.com/jisooround)                    |                     [전소윤](https://github.com/ddoyun)                      |                     [최지환](https://github.com/hwanky)                      |
| :---------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :---------------------------------------------------------------------------: | :--------------------------------------------------------------------------: | :--------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/107393773?v=4" width=150 /> | <img src="https://avatars.githubusercontent.com/u/87680906?v=4" width=150 /> | <img src="https://avatars.githubusercontent.com/u/110647022?v=4" width=150 /> | <img src="https://avatars.githubusercontent.com/u/46959186?v=4" width=150 /> | <img src="https://avatars.githubusercontent.com/u/48482406?v=4" width=150 /> |

## 기능 구현

### 최지환

- **회원가입**

  - 비밀번호 유효성 체크

  - 에러 핸들링

  - 프로필 이미지 선택 기능

  - 회원가입 완료 시 로그인 페이지로 이동

- **로그인**

  - 에러 핸들링

  - accessToken 저장(localStorage)

  - user 정보 저장(redux toolkit)

  - 회원 로그인 시 헤더 변경, 회원 메인 페이지로 이동

  - 관리자 로그인 시 관리자 메인 페이지로 이동

  - 회원가입 클릭 시 회원가입 페이지로 이동

- **인증확인**

  - accessToken이 있으면 자동으로 로그인

  - 로그인 안되어 있을 때 회원 전용 페이지 접근 차단

- **로그아웃**

  - 로그아웃 시 accessToken, user 정보 초기화

  - 헤더 회원가입, 로그인으로 변경

- **개인 정보 수정**

  - 개인 정보 수정 클릭 시 비밀번호 재확인

  - 확인이 완료되면 회원 정보 수정 페이지로 이동

  - 에러 핸들링

  - 비밀번호 변경은 따로 분리(모달창)

    - 유효성 체크

    - 스크롤 방지

  - 수정 완료시 user 정보 업데이트

### 우지수

- 메인 페이지
- 상품 검색
- 상품 목록
- 상품 상세
- 장바구니

### 박정민
- 주문 내역 ( + 주문 취소/확정)
- 주문 내역 상세
- 결제 페이지
- 결제 컴포넌트

### 전소윤

- 계좌 관리 (계좌 추가/삭제)
- 결제 페이지
- 찜한 목록

### 안가을

- 관리자 - 대시보드
- 관리자 - 상품 관리
- 관리자 - 거래 내역 관리

---

## 피드백 바라는 부분

### 검색 기능

### 계좌관리

- 계좌 추가 후, response 데이터를 banks State에 넣었는데, response 데이터가 삭제된 은행 데이터이기 때문에 화면에는 그려지지만,
banks 에는 해당 데이터만 남습니다. useEffect를 이용해서 banks가 업데이트 될 시 은행정보 api 를 실행하고 싶었는데 그렇게 만들면 은행정보 api가 무한으로 실행됐습니다..어떤식으로 코드를 짜야 은행정보 api를 리랜더링 할 수 있을까요?? 현재 형태는 계좌 추가 클릭 시 은행정보에서 false를 체크하여
false가 없을 시 계좌추가를 못하는 안내창이 나오게 구성되었는데 은행정보 때문에 에러날때도 있습니다.

- 계좌 추가 시 각 인풋창 핸들러로 value를 체크하여 변수에 넣는데 인풋창의 숫자 만큼 핸들러를 만드는게 조금 비효율적인거 같아서 더 나은 방법이 있으면
피드백 부탁드립니다.