import { getItem } from '@/utils/storage';
import axios from 'axios';

const MASTER_KEY = { masterKey: 'true' };

const getHeader = (option) => {
  const header = {
    'content-type': 'application/json',
    apikey: process.env.REACT_APP_API_KEY,
    username: process.env.REACT_APP_USER_NAME,
  };
  if (option) Object.assign(header, option);
  return header;
};

// 기본 인스턴스
const axiosApi = (url, options) => {
  const instance = axios.create({ baseURL: url, headers: getHeader(), ...options });
  return instance;
};

// token 추가 인스턴스
const axiosAuthApi = (url, options) => {
  const token = getItem('token');
  const accessToken = token ? { Authorization: `Bearer ${token}` } : '';
  const instance = axios.create({
    baseURL: url,
    headers: getHeader(accessToken),
    ...options,
  });
  return instance;
};

// master key 추가 인스턴스
const axiosAdminApi = (url, options) => {
  const instance = axios.create({
    baseURL: url,
    headers: getHeader(MASTER_KEY),
    ...options,
  });
  return instance;
};

export const defaultInstance = axiosApi(process.env.REACT_APP_BASE_URL);
export const authInstance = axiosAuthApi(process.env.REACT_APP_BASE_URL);
export const adminInstance = axiosAdminApi(process.env.REACT_APP_BASE_URL);
