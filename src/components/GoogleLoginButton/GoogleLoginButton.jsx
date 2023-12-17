import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router';

import config from '../../config';
import axiosInstance from '../../utils/axios';
import { ApiSendAccessTokenToBackend } from '../../services/authenticationService';

function GoogleLoginButton() {
    const navigate = useNavigate();

    const onSuccess = async (response) => {
        // console.log('Login success credential: ', response);

        // Decode response
        const credentialResponseDecode = jwtDecode(response.credential);
        // console.log("'Login success credential decode: '", credentialResponseDecode);

        // Call API to backend
        const res = await ApiSendAccessTokenToBackend(credentialResponseDecode.email, response.credential);

        if (res && res.data) {
            // Success - set access, refresh, and user_id into local storage
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            localStorage.setItem('user_id', res.data.user_id);
            axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
            navigate(config.routes.home);
        }
    };

    const onFailure = (error) => {
        console.error('Google login failed:', error);
    };

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

    // Custom button login Google
    // const sendAccessTokenToBackend = async (accessToken) => {
    //     try {
    //         const response = await axiosInstance.post('/token/validate-google-token', {
    //             accesstoken: accessToken,
    //         });

    //         console.log('Backend response:', response.data);
    //     } catch (error) {
    //         console.error('Error sending access token to backend:', error.message);
    //     }
    // };

    // const login = useGoogleLogin({
    //     onSuccess: (tokenResponse) => {
    //         console.log(tokenResponse);

    //         // Gửi access token đến backend
    //         sendAccessTokenToBackend(response.access_token);
    //     },
    //     onError: (error) => {
    //         console.log(error);
    //     },
    // });

    // return (
    //     <>
    //         <button
    //             onClick={() => login()}
    //             className="p-2 w-full flex items-center justify-center border border-gray-300 hover:bg-gray-100"
    //         >
    //             <svg
    //                 role="img"
    //                 height="24"
    //                 width="24"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 xmlnsXlink="http://www.w3.org/1999/xlink"
    //                 viewBox="0 0 48 48"
    //             >
    //                 <defs>
    //                     <path
    //                         id="a"
    //                         d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
    //                     ></path>
    //                 </defs>
    //                 <clipPath id="b">
    //                     <use xlinkHref="#a" overflow="visible"></use>
    //                 </clipPath>
    //                 <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path>
    //                 <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
    //                 <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
    //                 <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path>
    //             </svg>
    //             <span className="text-base ml-2">Google</span>
    //         </button>
    //     </>
    // );
}

export default GoogleLoginButton;
