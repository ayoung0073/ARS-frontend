import axios from 'axios';

const base = require('../../base')

export function checkMember() {
    const url =
        base.url + '/api/members/check';

    const option = {
        url: url,
        method: 'GET',
        headers: {
            "Authorization": sessionStorage.getItem("access_token")
        }
    }

    try {
        const response = axios(option);
        console.log('[SUCCESS] GET ', response);
        if (response.data.status !== 200) {
            return false;
        }
        return true;
    } catch (e) {
        console.log('[FAIL] GET ', e);
        return false;
    }
};

export default checkMember;