import axios from 'axios';

const base = require('../../utils/base')

export const getProblemCountApi = async () => {
    const url =
        base.url + '/api/problems/count';
    try {
        const response = await axios.get(`${url}`);
        return response.data.data;
    } catch (e) {
        return null;
    }
};

export default getProblemCountApi;