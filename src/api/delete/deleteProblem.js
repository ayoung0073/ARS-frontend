import axios from 'axios';

const base = require('../../utils/base')

export const deleteProblemApi = async (idx) => {
    const url =
        base.url + '/api/problems/' + idx;

    const option = {
        url: url,
        method: 'DELETE',
        headers: {
            "Authorization": sessionStorage.getItem("access_token")
        }
    }

    try {
        const response = await axios(option);
        console.log('[SUCCESS] DELETE ', response);
    } catch (e) {
        console.log('[FAIL] DELETE ', e);
        return null;
    }
};

export default deleteProblemApi;
