import PATH from '@/constants/path.js';
import { setItem } from '@/utils/storage.js';
import { defaultInstance, authInstance, adminInstance } from './util.js';

const requestPost = async (path, instance, data) => {
  return await instance.post(path, JSON.stringify(data)).then((res) => {
    return res.data;
  });
};

const requestGet = async (path, instance) => {
  return await instance.get(path).then((res) => {
    return res.data;
  });
};

const requestPut = async (path, instance, data) => {
  return await instance.put(path, JSON.stringify(data)).then((res) => {
    return res.data;
  });
};

const requestDelete = async (path, instance) => {
  return await instance.delete(path).then((res) => {
    return res.data;
  });
};

// 회원가입
export const signup = (data) => {
  return requestPost(PATH.SIGNUP, defaultInstance, data);
};

// 로그인
export const login = async (data) => {
  const res = await requestPost(PATH.LOGIN, defaultInstance, data);
  setItem('token', res.accessToken);
  return;
};

// 로그아웃
export const logout = () => { };

// 인증확인
export const checkAuth = () => {
  return requestPost(PATH.AUTH_ME, authInstance);
};

// 사용자 정보 수정 (사용자)
export const updateUserInfo = (data) => {
  return requestGet(PATH.AUTH_USER, authInstance, data);
};

// 선택 가능한 은행 목록 조회 (사용자)
export const getListBank = () => {
  return requestGet(PATH.BANKS, authInstance);
};

// 계좌 목록 및 잔액 조회
export const getListAccount = () => {
  return requestGet(PATH.ACCOUNT, authInstance);
};

// 계좌 연결
export const insertAccount = (data) => {
  return requestPost(PATH.ACCOUNT, authInstance, data);
};

// 계좌 해지
export const deleteAccount = (data) => {
  return requestDelete(PATH.ACCOUNT, authInstance, data);
};

// 단일 제품 상세 조회 (공용)
export const getProductDetail = (id) => {
  return requestGet(`${PATH.PRODUCT}/${id}`, authInstance);
};

// 제품 검색
export const searchProduct = () => { };

// 제품 거래 신청 (사용자)
export const insertOrder = (data) => {
  return requestPost(PATH.BUY, authInstance, data);
};

// 제품 거래 취소
export const updateOrderCancel = (id) => {
  return requestPost(PATH.BUY_CANCEL, authInstance, id);
};

// 제품 거래 확정
export const updateOrderOk = (id) => {
  return requestPost(PATH.BUY_OK, authInstance, id);
};

// 제품 전체 거래 내역
export const getListOrder = () => {
  return requestGet(PATH.TRANSACTION_DETAILS, authInstance);
};

// 단일 제품 상세 거래 내역
export const selectOrder = (id) => {
  return requestPost(PATH.TRANSACTION_DETAIL, authInstance, id);
};

// 모든 제품 조회 (관리자)
export const getListProductAdmin = () => {
  return requestGet(PATH.PRODUCT, adminInstance);
};

// 전체 거래 내역 조회 (관리자)
export const getListOrderAdmin = () => {
  return requestGet(PATH.TRANSACTION_ALL, adminInstance);
};

// 거래 내역 완료/완료 해제, 취소/취소 해제 (관리자)
export const updateOrderAdmin = (id, data) => {
  return requestPut(`${PATH.TRANSACTION}/${id}`, adminInstance, data);
};

// 제품 추가 (관리자)
export const insertProduct = (data) => {
  return requestPost(PATH.PRODUCT, adminInstance, data);
};

// 제품 수정 (관리자)
export const updateProduct = (id, data) => {
  return requestPut(`${PATH.PRODUCT}/${id}`, adminInstance, data);
};

// 제품 삭제 (관리자)
export const deleteProduct = (id) => {
  return requestDelete(`${PATH.PRODUCT}/${id}`, adminInstance);
};
