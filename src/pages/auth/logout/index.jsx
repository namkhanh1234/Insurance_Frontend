import { useNavigate } from 'react-router';
import { useEffect } from 'react';

import config from '../../../config';
import axiosInstance from '../../../utils/axios';
import { ApiLogout } from '../../../services/authenticationService';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../../features/actions/authAction';

function Logout() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth);
    const dispath = useDispatch();
    useEffect(() => {
        console.log('>> Check auth logout: ', user);
        if (user.auth) {
            dispath(logoutAction({ refreshtoken: user.refresh_token }));
        }
    }, []);

    // useDispatch(logoutAction({ refreshtoken: user.refresh_token }));
    //console.log('>> Check auth logout: ', user);

    const logoutApi = async () => {
        const refresh_token = localStorage.getItem('refresh_token');

        const response = await ApiLogout(refresh_token);

        if (response && response.status === 200) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_id');
            localStorage.removeItem('email');

            axiosInstance.defaults.headers['Authorization'] = null;
            navigate(config.routes.login);
        }
    };

    useEffect(() => {
        logoutApi();

        navigate(config.routes.login);
    }, []);
}

export default Logout;
