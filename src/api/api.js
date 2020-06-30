import axios from 'axios'
import router from '../router'

const api = axios.create();
api.defaults.baseURL = 'https://biaochenxuying.cn/api';
api.defaults.timeout = 5000;
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
api.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'

export default api
