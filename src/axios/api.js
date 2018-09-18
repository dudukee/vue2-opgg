import axios from './config.js';

const api = {
    getListJson(params) {
        // return axios.get('../../static/mock/list.json', { params }).then(res => res.data);
        // https://www.op.gg/app/champion/statistics/list.json/
        return axios.get('/api/app/champion/statistics/list.json/', { params }).then(res => res.data);
    },
    getDetail(name) {
        // return axios.get('../../static/mock/detail.json', { params }).then(res => res.data);
        // https://www.op.gg/app/champion/summary.json/key=Aatrox
        return axios.get('/api/app/champion/summary.json/key=' + name).then(res => res.data);
    }
}

export default api