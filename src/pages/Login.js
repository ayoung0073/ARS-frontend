import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import GoogleLoginBtn from "../components/GoogleLogin"

const responseGoogle = (response) => {
  console.log(response);
}

const Login = () => {
    return (
        <GoogleLoginBtn />
    )
}

export default Login