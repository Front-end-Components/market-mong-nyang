const { request } = require('@/utils/axios');

export const requestSignup = async (signupData) => {
  const res = await request({
    method: 'POST',
    url: '/auth/signup',
    reqData: signupData,
  });
  if (res.status === 200) return true;
  else return false;
};

export const requestLogin = async (loginData) => {
  const res = await request({
    method: 'POST',
    url: '/auth/login',
    reqData: loginData,
  });
  if (res.status === 200) {
    localStorage.setItem('token', JSON.stringify(res.data.accessToken));
    return res.data.user;
  } else return false;
};

export const requestLogout = async () => {
  const res = await request({
    method: 'POST',
    url: '/auth/logout',
  });
  if (res.status === 200) return true;
  else return false;
};

export const requestUserConfirm = async (token) => {
  const res = await request({
    method: 'POST',
    url: '/auth/me',
  });
  if (res.status === 200) return res.data;
  else return false;
};

export const requestUpdateProfile = async (updateData) => {
  const res = await request({
    method: 'PUT',
    url: '/auth/user',
    reqData: updateData,
  });
  if (res.status === 200) return res.data;
  else return false;
}
