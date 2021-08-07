import axios from 'axios';

const base = require('../../utils/base')

export const getProblemApi = async (idx) => {
    const url =
        base.url + '/api/problems/' + idx;
    try {
        const response = await axios.get(`${url}`);
        return response.data.data;
    } catch (e) {
        return null;
    }
}

export default getProblemApi;