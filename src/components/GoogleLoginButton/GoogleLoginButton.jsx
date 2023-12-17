import React from 'react';
import { GoogleLogin } from 'react-google-login';

function GoogleLoginButton({ onSuccess, onFailure }) {
    return (
        <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Đăng nhập bằng Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />
    );
}

export default GoogleLoginButton;
