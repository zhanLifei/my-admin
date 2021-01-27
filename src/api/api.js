import axios from 'axios';
// 创建 axios 实例
const request = axios.create({
 // API 请求的默认前缀
 baseURL: process.env.VUE_APP_BASE_URL,
 timeout: 10000, // 请求超时时间
});


export default request;
