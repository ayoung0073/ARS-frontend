import axios from 'axios';

const getProblemListApi = async () => {
    const url =
        'http://52.79.182.214/api/problems?step=0';
    try {
        const response = await axios.get(`${url}`);
        console.log('[SUCCESS] GET ', response);
        return response.data.data;
    } catch (e) {
        console.log('[FAIL] GET ', e);
        return null;
    }
};

export default getProblemListApi;