const { request } = require("@/utils/axios");

export const requestSignup = async (signupData) => {
  const res = await request({
    method: "POST",
    url: "/auth/signup",
    reqData: signupData,
  });
  if (res.status === 200) return true;
  else return false;
};
