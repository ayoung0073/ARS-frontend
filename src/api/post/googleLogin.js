import axios from 'axios';

const base = require('../../base')

export const googleLogin = async (accessToken) => {
    const url =
        base.url + '/api/members/google';

    const option = {
        url : url,
        method : 'POST',
        data: {"accessToken": accessToken}
    }
    try {
        const response = await axios(option);
        console.log('[SUCCESS] POST ', response);
        return response.data.data;
    } catch (e) {
        console.log('[FAIL] POST ', e);
        return null;
    }
};

export default googleLogin;