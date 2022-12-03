import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from './../store/loadingSlice.js';
import { defaultInstance, authInstance, adminInstance } from './util.js';

const SIGNUP = `/auth/signup`;
const LOGIN = `/auth/login`;
const AUTH_ME = `/auth/me`;
const AUTH_USER = `/auth/user`;
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

export const requestPost = (router, instance, data) => {
  try {
    // 로딩 보여주기
    dispatch(showLoading());
    await instance.post(router, data).then((res) => {
      return res;
    });
  } catch {
    // TODO: 에러 처리 추가
    throw new Error('에러가 발생하였습니다.');
  } finally {
    // 로딩 숨기기
    dispatch(hideLoading());
  }
};

export const requestGet = (router, instance) => {
  try {
    // 로딩 보여주기
    dispatch(showLoading());
    await instance.get(router).then((res) => {
      return res;
    });
  } catch {
    // TODO: 에러 처리 추가
    throw new Error('에러가 발생하였습니다.');
  } finally {
    // 로딩 숨기기
    dispatch(hideLoading());
  }
};

export const requestPut = (router, instance, data) => {
  try {
    // 로딩 보여주기
    dispatch(showLoading());
    await instance.put(router, data).then((res) => {
      return res;
    });
  } catch {
    // TODO: 에러 처리 추가
    throw new Error('에러가 발생하였습니다.');
  } finally {
    // 로딩 숨기기
    dispatch(hideLoading());
  }
};

export const requestDelete = (router, instance) => {
  try {
    // 로딩 보여주기
    dispatch(showLoading());
    await instance.delete(router).then((res) => {
      return res;
    });
  } catch {
    // TODO: 에러 처리 추가
    throw new Error('에러가 발생하였습니다.');
  } finally {
    // 로딩 숨기기
    dispatch(hideLoading());
  }
};

// 회원가입
export async function signup(data) {
  requestPost(SIGNUP, defaultInstance, data);
}

// 사용자 정보 수정
export async function updateUserInfo(data) {
  requestGet(AUTH_USER, authInstance, data);
}

// 선택 가능한 은행 목록 조회
export async function selectBanks() {
  requestGet(BANKS, authInstance);
}

// 모든 제품 조회 (관리자)
export async function selectProducts() {
  requestGet(PRODUCT, adminInstance);
}

// 단일 제품 상세 조회
export async function selectProductDetail(id) {
  requestGet(PRODUCT + `/${id}`, authInstance);
}

// 제품 거래 신청
export async function insertOrder(data) {
  requestPost(BUY, authInstance, data);
}

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
