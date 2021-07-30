import axios from 'axios';

const base = require('../../base')

export const updateStepApi = async (idx, step) => {
    const url =
        base.url + '/api/problems/' + idx + '/step';

    console.log(idx, step)
    const option = {
        url: url,
        method: 'PUT',
        headers: {
            "Authorization": sessionStorage.getItem("access_token")
        },
        data: {
            step: step
        }
    }

    try {
        const response = await axios(option);
        console.log('[SUCCESS] PUT ', response);
    } catch (e) {
        console.log('[FAIL] PUT ', e);
        return null;
    }
};

export default updateStepApi;
