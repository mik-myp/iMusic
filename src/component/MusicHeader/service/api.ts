import Request from '@/utils/request';

export const LoginGetKey = (params: any) => {
  return Request('/login/qr/key', { params });
};

export const LoginGetImgByKey = (params: any) => {
  return Request('/login/qr/create', { params });
};

export const LoginByCellphone = (params: any) => {
  return Request('/login/cellphone', { method: 'POST', data: params });
};
