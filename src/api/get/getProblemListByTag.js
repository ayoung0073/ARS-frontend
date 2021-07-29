import axios from 'axios';

const base = require('../../base')

export const getProblemListApi = async (tagName) => {
    const url =
        base.url + '/api/tags?name=' + tagName;
    try {
        const response = await axios.get(`${url}`);
        console.log('[SUCCESS] GET ', response);
        return response.data.data;
    } catch (e) {
        console.log('[FAIL] GET ', e);
        return null;
    }
};

export default getProblemListApi;