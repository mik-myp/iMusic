import axios from "../utils";

const LoginGetKey = (params: any) => {
  return axios({
    method: "GET",
    url: "/login/qr/key",
    params,
  }).then((res) => {
    return res.data;
  });
};
const LoginGetImgByKey = (params: any) => {
  return axios({
    method: "GET",
    url: "/login/qr/create",
    params,
  }).then((res) => {
    return res.data;
  });
};
const LoginByCellphone = (params: any) => {
  return axios({
    method: "POST",
    url: "/login/cellphone",
    params,
  }).then((res) => {
    return res.data;
  });
};

export { LoginGetKey, LoginGetImgByKey, LoginByCellphone };
