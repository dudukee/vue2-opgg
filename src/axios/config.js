import axios from 'axios'
import Qs from 'qs'

const config = {
    baseURL: '',
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    },
    timeout: 10000
}

axios.defaults = config;

/*
 * 请求拦截器
 */
axios.interceptors.request.use(
    config => {
        if (
            config.method === "post" ||
            config.method === "put" ||
            config.method === "delete"
        ) {
            config.data = Qs.stringify(config.data);
        }
        return config
    }, error => {
        console.log(error);
        return Promise.reject(error)
    }
)

/*
 * 响应拦截器
 */
axios.interceptors.response.use(
    res => {
        return res;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default axios