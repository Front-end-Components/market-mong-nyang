# 🐶 마켓멍냥 🐱

React.js 와 REST API 를 활용한 반려동물 용품 쇼핑몰 프로젝트

- 배포 링크 : [마켓멍냥](https://market-mong-nyang.netlify.app/)
- 원본 사이트 : [마켓컬리](https://www.kurly.com/main)
- 상품 출처 : [비엔비엔](https://www.bienbien.kr/main/index.php)

## 사용기술

- React.js
- Redux Toolkit
- axios
- SCSS

## 팀원

|<center>[박정민](https://github.com/plou102)</center>|<center>[안가을](https://github.com/autumnly1007)</center>|<center>[우지수](https://github.com/jisooround)</center>|<center>[전소윤](https://github.com/ddoyun)</center>|<center>[최지환](https://github.com/hwanky)</center>|
| :--------------------------------------------------------------------------- | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------- | :-------------------------------------------------------------------------- | :--------------------------------------------------------------------------|
| <img src="https://avatars.githubusercontent.com/u/107393773?v=4" width=150 /> | <img src="https://avatars.githubusercontent.com/u/87680906?v=4" width=150 /> | <img src="https://avatars.githubusercontent.com/u/110647022?v=4" width=150 /> | <img src="https://avatars.githubusercontent.com/u/46959186?v=4" width=150 /> | <img src="https://avatars.githubusercontent.com/u/48482406?v=4" width=150 /> |
|회원가입<br />로그인<br />인증확인<br />로그아웃<br /> 개인 정보 수정|관리자 대시보드<br />관리자 상품 관리<br />관리자 거래 내역 관리|메인 페이지<br />상품 검색<br />상품 상세<br />장바구니|계좌 관리<br />(계좌 추가/삭제)<br />결제 페이지<br />찜한 목록|회원가입<br />로그인<br />인증확인<br />로그아웃<br />개인 정보 수정

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

- 주문 내역 (주문 취소/확정)
- 주문 내역 상세
- 결제 페이지

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
