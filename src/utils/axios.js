import axios from "axios";

export const request = ({ method = "GET", url = "", reqData = {} }) => {
  document.body.style.cursor = "wait";
  const accessToken = JSON.parse(localStorage.getItem("token"));
  return axios({
    headers: {
      "content-type": "application/json",
      apikey: process.env.REACT_APP_API_KEY,
      username: process.env.REACT_APP_USER_NAME,
      Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
    },
    method,
    url: process.env.REACT_APP_BASE_URL + url,
    data: reqData,
  })
    .then((res) => {
      document.body.style.cursor = "default";
      return res;
    })
    .catch((err) => {
      console.log(err);
      document.body.style.cursor = "default";
      return err.response;
    });
};
