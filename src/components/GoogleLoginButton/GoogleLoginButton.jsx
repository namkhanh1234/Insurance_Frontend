import React, { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import config from '../../config';
import axiosInstance from '../../utils/axios';
import { ApiSendAccessTokenToBackend } from '../../services/authenticationService';
import { loginGoogleAction } from '../../features/actions/authAction';

function GoogleLoginButton() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth);

    const onSuccess = async (response) => {
        // console.log('Login success credential: ', response);

        // Decode response
        const credentialResponseDecode = jwtDecode(response.credential);
        // console.log("'Login success credential decode: '", credentialResponseDecode);

        // Redux
        dispatch(
            loginGoogleAction({
                email: credentialResponseDecode.email,
                credential: response.credential,
            }),
        );
    };

    const onFailure = (error) => {
        console.error('Google login failed:', error);
    };

    console.log('>> Check state auth: ', user);
    useEffect(() => {
        if (user.auth) {
            navigate(config.routes.home);
        }
    });

    return (
        <GoogleLogin
            type="icon"
            size="large"
            shape="rectangular"
            text="signin_with"
            onSuccess={onSuccess}
            onError={onFailure}
        />
    );
}

export default GoogleLoginButton;
