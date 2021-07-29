import axios from 'axios';

const base  = require('../../base')

export const searchApi = async (keyword) => {
    const url =
        base.url + '/api?search=' + keyword;
    try {
        const response = await axios.get(`${url}`);
        console.log('[SUCCESS] GET ', response);
        return response.data.data;
    } catch (e) {
        console.log('[FAIL] GET ', e);
        return null;
    }
};

export default searchApi;