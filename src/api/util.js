import axios from 'axios';

const BASE_URL = `https://asia-northeast3-heropy-api.cloudfunctions.net/api`;
const API_KEY = `FcKdtJs202209`;
const USER_NAME = `KDT3_TEAM7`;
const MASTER_KEY = { masterKey: 'true' };

const getHeader = (option) => {
  const header = {
    'content-type': 'application/json',
    apikey: API_KEY,
    username: USER_NAME,
  };
  if (option) Object.assign(header, option);
  return header;
}

// 기본 인스턴스
const axiosApi = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
}

// token 추가 인스턴스
const axiosAuthApi = (url, options) => {
  const token = '어디서가져옴?';
  const accessToken = token ? { Authorization: `Bearer ${token}` } : '';
  const instance = axios.create({
    baseURL: url,
    headers: { getHeader(accessToken) },
    ...options,
  });
  return instance;
};

// master key 추가 인스턴스
const axiosAdminApi = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    headers: { getHeader(MASTER_KEY) },
    ...options,
  });
  return instance;
}

export const defaultInstance = axiosApi(BASE_URL);
export const authInstance = axiosAuthApi(BASE_URL);
export const adminInstance = axiosAdminApi(BASE_URL);
