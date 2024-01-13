import { useNavigate } from 'react-router';
import { useEffect } from 'react';

import config from '../../../config';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../../features/actions/authAction';

function Logout() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth);
    const dispath = useDispatch();

    useEffect(() => {
        if (user.auth) {
            dispath(
                logoutAction({
                    refresh: user.refresh_token,
                }),
            );

            navigate(config.routes.login);
        }
    }, []);
}

export default Logout;
