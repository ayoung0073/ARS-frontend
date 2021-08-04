import axios from 'axios';

const base = require('../../utils/base')

export const searchApi = async (page, keyword) => {
    const url =
        base.url + '/api?page=' + page + '&search=' + keyword;
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