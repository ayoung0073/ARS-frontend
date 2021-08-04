import axios from 'axios';
import dateSetting from '../dateSetting';

const base = require('../../utils/base')

export const registerReview = async (props) => {
    const url =
        base.url + '/api/problems/' + props.problemId + "/reviews";

    console.log(props)
    const option = {
        url: url,
        method: 'POST',
        headers: {
            "Authorization": sessionStorage.getItem("access_token")
        },
        data: {
            title: props.title,
            notificationDate: dateSetting(props.notificationDate),
            content: props.content
        }
    }

    try {
        const response = await axios(option);
        console.log('[SUCCESS] POST ', response);
        window.location.href = "/problems/" + props.problemId; 
    } catch (e) {
        console.log('[FAIL] POST ', e);
        return null;
    }
};

export default registerReview;
