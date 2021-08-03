import axios from 'axios';

const base = require('../../utils/base')

export const registerGuestApi = async (props) => {
    const url =
        base.url + '/api/guests';

    console.log(props)
    const option = {
        url: url,
        method: 'POST',
        data: {
            nickname: props.nickname,
            content: props.content
        }
    }

    try {
        const response = await axios(option);
        console.log('[SUCCESS] POST ', response);
    } catch (e) {
        console.log('[FAIL] POST ', e);
        return null;
    }
};

export default registerGuestApi;
