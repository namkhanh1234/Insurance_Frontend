import { useNavigate } from 'react-router';
import { useEffect } from 'react';

import config from '../../../config';
import axiosInstance from '../../../utils/axios';
import { ApiLogout } from '../../../services/authenticationService';

function Logout() {
    const navigate = useNavigate();

    const logoutApi = async () => {
        const refresh_token = localStorage.getItem('refresh_token');

        const response = await ApiLogout(refresh_token);
        console.log(response);

        if (response && response.status === 200) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_id');

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
