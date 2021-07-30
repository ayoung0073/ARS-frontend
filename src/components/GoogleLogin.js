import { GoogleLogin } from "react-google-login";
const base = require('../base.json')

const clientId = base.client_id;

export default function GoogleLoginBtn({ onGoogleLogin }) {
    const onSuccess = async (response) => {
        console.log(response)
        const { googleId, profileObj: { email, name } } = response;
        await onGoogleLogin(
            // 구글 로그인 성공시 서버에 전달할 데이터
            console.log(response)
        );
    }

    const onFailure = (error) => {
        console.log(error);
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
