import axios from 'axios';

const base = require('../../base')

const googleLogin = async (accessToken) => {
    const url =
        base.url + '/api/members/google';

    const option = {
        url: url,
        method: 'POST',
        data: { "accessToken": accessToken }
    }

    try {
        const response = await axios(option);
        console.log('[SUCCESS] POST ', response);
        sessionStorage.setItem("nickname", response.data.data.nickname)
        sessionStorage.setItem("access_token", response.data.data.access_token)
        return response.data.data;
    } catch (e) {
        console.log('[FAIL] POST ', e);
        return null;
    }
};

export default googleLogin;