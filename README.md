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
  
| [박정민](https://github.com/plou102) | [안가을](https://github.com/autumnly1007) | [우지수](https://github.com/jisooround) | [전소윤](https://github.com/ddoyun) | [최지환](https://github.com/hwanky) |
| :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/107393773?v=4" width=150 /> | <img src="https://avatars.githubusercontent.com/u/87680906?v=4" width=150 /> | <img src="https://avatars.githubusercontent.com/u/110647022?v=4" width=150 /> | <img src="https://avatars.githubusercontent.com/u/46959186?v=4" width=150 /> | <img src="https://avatars.githubusercontent.com/u/48482406?v=4" width=150 /> |

## 기능 구현

### 최지환
- 회원가입
- 로그인
- 인증확인
- 로그아웃
- 개인 정보 수정

### 우지수

<details>
<summary>장바구니</summary>
<div markdown="1">
</br>
- Rudux Slice를 이용하여 상품을 장바구니에 담고, persist로 새로고침시에도 항목이 유지되도록 하였습니다.</br>
- 장바구니 항목의 갯수를 Navbar 장바구니 아이콘에 표시되도록 하였습니다.</br>
- 선택한 상품의 가격이 최종 가격에 반영되도록 하였습니다.</br>
</div>
</details>
<details>
<summary>상품 검색</summary>
<div markdown="1">
</br>
- useParams를 사용하여 입력한 검색어가 url에 포함되게하였고, Search페이지에서 값을 가져와 검색하도록 하였습니다.</br>
- 검색 결과가 없을 경우 다른 검색어 입력하라는 안내 문구가 나옵니다.</br>
</div>
</details>
<details>
<summary>상품 상세</summary>
<div markdown="1">
</br>
- 품절인 상품일 경우 구매할 수 없도록 품절 버튼으로 처리하였습니다.</br>
</div>
</details>
<details>
<summary>상품 목록</summary>
<div markdown="1">
</br>
- 태그로 상품을 구분하여 카테고리 클릭시 해당하는 상품만 노출되도록 하였습니다.</br>
</div>
</details>
<details>
<summary>메인페이지</summary>
<div markdown="1">
</br>
- Swiper 슬라이드로 배너와 상품을 보여줍니다.</br>
</div>
</details>

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
