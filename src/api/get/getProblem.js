import axios from 'axios';

const base = require('../../base')

export const getProblemApi = async (idx) => {
    console.log(idx)
    const url =
        base.url + '/api/problems/' + idx;
    try {
        const response = await axios.get(`${url}`);
        console.log('[SUCCESS] GET ', response);
        return response.data.data;
    } catch (e) {
        console.log('[FAIL] GET ', e);
        return null;
    }
}

export default getProblemApi;