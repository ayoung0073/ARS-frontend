import { GoogleLogin } from "react-google-login";
import googleLogin from "../api/post/googleLogin";

const base = require('../base.json')
const clientId = base.client_id;

export default function GoogleLoginBtn(props) {
    console.log(props)
    const onSuccess = async (response) => {
        console.log(response)
        await googleLogin(response.accessToken);
        window.location.href = props.href
    }

    const onFailure = (error) => {
        console.log(error);
        alert("Login Fail");
        window.location.href = "/";
    }

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure} />
        </div>
    )
}