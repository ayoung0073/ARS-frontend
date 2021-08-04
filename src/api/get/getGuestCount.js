import axios from 'axios';

const base = require('../../utils/base')

export const getGuestCountApi = async () => {
    const url =
        base.url + '/api/guests/count';
    try {
        const response = await axios.get(`${url}`);
        console.log('[SUCCESS] GET ', response);
        return response.data.data;
    } catch (e) {
        console.log('[FAIL] GET ', e);
        return null;
    }
};

export default getGuestCountApi;