import { useNavigate } from 'react-router';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import config from '../../../../config';
import { logoutAction } from '../../../../features/actions/authAction';

function LogoutAdmin() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth);
    const dispath = useDispatch();

    if (user.auth) {
        dispath(
            logoutAction({
                refresh: user.refresh_token,
            }),
        );
    }

    useEffect(() => {
        // console.log('>> Check user logout page', user);

        if (user.auth == false) {
            navigate(config.routes.adminLogin);
        }
    }, [user]);
}

export default LogoutAdmin;
