import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from './../store/loadingSlice.js';

const API_URL = `https://asia-northeast3-heropy-api.cloudfunctions.net/api`;
const API_KEY = `FcKdtJs202209`;
const USER_NAME = `KDT3_TEAM7`;

const ACCESS_TOKEN = { Authorization: 'Bearer ' };
const MASTER_KEY = { masterKey: 'true' };

const SIGNUP = `/auth/signup`;
const LOGIN = `/auth/login`;
const AUTH_ME = `/auth/me`;

const BANKS = `/account/banks`;
const ACCOUNT = `/account`;

const PRODUCT = `/products`;
const SEARCH = `/products/search`;
const BUY = `/products/buy`;
const BUY_OK = `/products/ok`;
const TRANSACTION = `/products/transactions`;
const TRANSACTION_ALL = `/products/transactions/all`;
const TRANSACTION_DETAIL = `/products/transactions/details`;

let dispatch = useDispatch();

// 회원가입 /auth/signup, POST
// 로그인 /auth/login, POST
// 인증확인 /auth/me, POST
// 로그아웃 /auth/logout, POST
// 사용자 정보 수정 /auth/user, PUT

// 선택 가능한 은행 목록 조회 /account/banks, GET
// 계좌 목록 및 잔액 조회 /account, GET
// 계좌 연결 /account, POST
// 계좌 해지 /account, DELETE

// 모든 제품 조회 /products, GET
// 전체 거래 내역 /products/transactions/all, GET
// 거래 내역 완료/취소 및 해제 /products/transactions/:detailId, PUT
// 제품 추가 /products, POST
// 제품 수정 /products/:productId, PUT
// 제품 삭제 /products/:productId, DELETE

// 단일 제품 상세 조회 /products/:productId, GET
// 제품 검색 /products/search, POST

// 제품 거래 신청 /products/buy, POST
// 제품 거래 확정 /products/ok, POST
// 제품 전체 거래 내역 /products/transactions/details, GET
// 단일 제품 상세 거래 내역 /products/transactions/detail, POST

/**
 * request header 생성
 * @param {object} option
 * @returns
 */
function getHeader(option) {
  const header = {
    'content-type': 'application/json',
    apikey: API_KEY,
    username: USER_NAME,
  };
  if (option) Object.assign(header, option);
  return header;
}

/**
 * 회원가입
 * @method POST
 * @param {string} email 사용자 아이디 (필수)
 * @param {string} password 사용자 비밀번호, 8자 이상 (필수)
 * @param {string} displayName 사용자 이름, 20자 이하 (필수)
 * @param {string} profileImgBase64 사용자 프로필 이미지(base64) - jpg, jpeg, webp, png, gif, svg
 * @return {Promise}
 */
export async function signup({ email, password, displayName, profileImgBase64 }) {
  try {
    dispatch(showLoading());
    axios.post(API_URL, { email, password, displayName, profileImgBase64 }, getHeader()).then((res) => {
      ACCESS_TOKEN.Authorization += res.accessToken;
      return res;
    });
  } catch {
    throw new Error('에러가 발생하였습니다.');
  } finally {
    dispatch(hideLoading());
  }
}

/**
 * 사용자 정보 수정
 * @method GET
 * @param {string} displayName 새로운 표시 이름
 * @param {string} profileImgBase64 사용자 프로필 이미지(base64) - jpg, jpeg, webp, png, gif, svg
 * @param {string} oldPassword 기존 비밀번호
 * @param {string} newPassword 새로운 비밀번호
 * @return {Promise}
 */
export async function updateUserInfo({ displayName, profileImgBase64, oldPassword, newPassword }) {
  try {
    axios.put(API_URL, { displayName, profileImgBase64, oldPassword, newPassword }, getHeader(ACCESS_TOKEN)).then((res) => {
      return res;
    });
  } catch {
    throw new Error('에러가 발생하였습니다.');
  }
}

/**
 * 선택 가능한 은행 목록 조회
 * @method GET
 * @return {Promise}
 */
export async function selectBanks() {
  try {
    axios.get(API_URL + BANKS, getHeader(ACCESS_TOKEN)).then((res) => {
      return res;
    });
  } catch {
    throw new Error('에러가 발생하였습니다.');
  }
}

/**
 * 모든 제품 조회 (관리자)
 */
export async function getProducts() {
  try {
    axios.get(API_URL + PRODUCT, getHeader(MASTER_KEY)).then((res) => {
      return res;
    });
  } catch {
    throw new Error('에러가 발생하였습니다.');
  }
}

/**
 * 단일 제품 상세 조회
 * @param {string} id 제품 아이디
 */
export async function deleteListTodo(id) {
  try {
    axios.get(API_URL + PRODUCT + `/${id}`, getHeader());
  } catch {
    throw new Error('에러가 발생하였습니다.');
  }
}

/**
 * 제품 거래 신청
 * @param {string} productId 거래할 제품 ID (필수)
 * @param {string} accountId 결제할 사용자 계좌 ID (필수)
 * @param {object} reservation 예약 정보(예약 시스템을 사용하는 경우만 필요)
 */
export async function reorderTodo({ productId, accountId, reservation }) {
  try {
    axios.post(API_URL + BUY, { productId, accountId, reservation }, getHeader(ACCESS_TOKEN)).then((res) => {
      return res;
    });
  } catch {
    throw new Error('에러가 발생하였습니다.');
  }
}
