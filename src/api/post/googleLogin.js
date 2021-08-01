import axios from 'axios';

const base = require('../../utils/base')

const googleLogin = async (accessToken, nickname) => {
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
        if (response.data.status === 200) {
            console.log('로그인 성공')
            sessionStorage.setItem("nickname", response.data.data.nickname)
            sessionStorage.setItem("access_token", response.data.data.access_token)
            window.location.href = '/'
        }
        else {
            sessionStorage.setItem("nickname", nickname)
            window.location.href = '/'
        }
    } catch (e) {
        console.log('[FAIL] POST ', e);
        return null;
    }
};

export default googleLogin;