import { useNavigate } from 'react-router';
import config from '../../../config';
import axiosInstance from '../../../utils/axios';
import { useEffect } from 'react';

function Logout() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('username');
        localStorage.removeItem('user_id');

        axiosInstance.defaults.headers['Authorization'] = null;
        navigate(config.routes.login);
    }, []);
}

export default Logout;
