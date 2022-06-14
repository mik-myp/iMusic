import { request } from 'umi';
import { notification } from 'antd';
interface optionsType {
  method?: string; //请求数据的方法：GET、POST、PUT、DELETE...
  params?: any; //GET方式请求数据的参数
  data?: any; //其他方式请求数据的参数
}
const baseUrl = 'https://netease-cloud-music-8gkd4hkmy-mik-myp.vercel.app';

const Request = async (url: string, options: optionsType) => {
  return request(baseUrl + url, {
    ...options,
    skipErrorHandler: true,
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      notification.error({
        message: '出现错误',
        description: error,
        duration: 1.5,
      });
    });
};

export default Request;
