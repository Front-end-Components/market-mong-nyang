// import { useDispatch } from 'react-redux';
// import { showLoading, hideLoading } from '../store/loadingSlice.js';
import PATH from '@/constants/path.js';
import { setItem } from '@/utils/storage.js';
import { defaultInstance, authInstance, adminInstance } from './util.js';

// let dispatch = useDispatch();
const requestPost = async (path, instance, data) => {
  try {
    // dispatch(showLoading());
    return await instance.post(path, JSON.stringify(data)).then((res) => {
      return res.data;
    });
  } catch (e) {
    // TODO: 에러 처리 추가
    console.log(e);
    throw new Error('에러가 발생하였습니다.');
  } finally {
    // dispatch(hideLoading());
  }
};

const requestGet = async (path, instance) => {
  try {
    return await instance.get(path).then((res) => {
      return res.data;
    });
  } catch (e) {
    // TODO: 에러 처리 추가
    console.log(e);
    throw new Error('에러가 발생하였습니다.');
  } finally {
  }
};

const requestPut = async (path, instance, data) => {
  try {
    return await instance.put(path, JSON.stringify(data)).then((res) => {
      return res.data;
    });
  } catch (e) {
    // TODO: 에러 처리 추가
    console.log(e);
    throw new Error('에러가 발생하였습니다.');
  } finally {
  }
};

const requestDelete = async (path, instance) => {
  try {
    return await instance.delete(path).then((res) => {
      return res.data;
    });
  } catch (e) {
    // TODO: 에러 처리 추가
    console.log(e);
    throw new Error('에러가 발생하였습니다.');
  } finally {
  }
};

// 로그인 /auth/login, POST
// 인증확인 /auth/me, POST
// 로그아웃 /auth/logout, POST
// 사용자 정보 수정 /auth/user, PUT

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
export const logout = () => {};

// 인증확인
export const checkAuth = () => {};

// 사용자 정보 수정 (사용자)
export const updateUserInfo = (data) => {
  return requestGet(PATH.AUTH_USER, authInstance, data);
};

// 선택 가능한 은행 목록 조회 /account/banks, GET
// 계좌 목록 및 잔액 조회 /account, GET
// 계좌 연결 /account, POST
// 계좌 해지 /account, DELETE

// 선택 가능한 은행 목록 조회 (사용자)
export const selectBanks = () => {
  return requestGet(PATH.BANKS, authInstance);
};

// 계좌 목록 및 잔액 조회
export const selectListAccount = () => {
  return requestGet(PATH.ACCOUNT, authInstance);
};

// 계좌 연결
export const insertAccount = (data) => {
  return requestPost(PATH.ACCOUNT, authInstance, data);
};

// 계좌 해지
export const deleteAccount = () => {
  return requestDelete(PATH.ACCOUNT, authInstance);
};

// 단일 제품 상세 조회 /products/:productId, GET
// 제품 검색 /products/search, POST
// 제품 거래 신청 /products/buy, POST
// 제품 거래 확정 /products/ok, POST
// 제품 전체 거래 내역 /products/transactions/details, GET
// 단일 제품 상세 거래 내역 /products/transactions/detail, POST

// 단일 제품 상세 조회 (공용)
export const selectProductDetail = (id) => {
  return requestGet(`${PATH.PRODUCT}/${id}`, authInstance);
};

// 제품 검색
export const searchProduct = () => {};

// 제품 거래 신청 (사용자)
export const insertOrder = (data) => {
  return requestPost(PATH.BUY, authInstance, data);
};

// 제품 거래 확정
export const updateOrderOk = () => {};

// 제품 전체 거래 내역
export const selectListOrder = () => {};

// 단일 제품 상세 거래 내역
export const selectOrder = () => {};

// 모든 제품 조회 /products, GET
// 전체 거래 내역 /products/transactions/all, GET
// 거래 내역 완료/취소 및 해제 /products/transactions/:detailId, PUT
// 제품 추가 /products, POST
// 제품 수정 /products/:productId, PUT
// 제품 삭제 /products/:productId, DELETE

// 모든 제품 조회 (관리자)
export const selectListProductAdmin = () => {
  return requestGet(PATH.PRODUCT, adminInstance);
};

// 전체 거래 내역 조회 (관리자)
export const selectListOrderAdmin = () => {
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
