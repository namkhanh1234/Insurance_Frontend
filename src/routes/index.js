import config from '../config';

// Auth
import Login from '../pages/auth/login';
import Logout from '../pages/auth/logout';
import Register from '../pages/auth/register';
import ForgotPassword from '../pages/auth/forgotPassword';

// Home
import Home from '../pages/home';

import Support from '../pages/support';

// Profile
import Profile from '../pages/profile';

// Insurance
import Insurances from '../pages/insurance/insurances';
import InsuranceDetailt from '../pages/insurance/detail';

// Registration Form
import RegistrationForm from '../pages/registrationForm';  

// Contracts
import Contracts from '../pages/contract/contracts';
import ContractDetail from '../pages/contract/detail';
import ContractPayment from '../pages/contract/contractPayment';
import ContractPaymentHistory from '../pages/contract/contractPaymentHistory';
//Payment
import PaymentRequest from '../pages/payment/PaymentRequest';

const publicRoutes = [];

const privateRoutes = [
    // Authentication
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.logout, component: Logout, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.forgotPassword, component: ForgotPassword, layout: null },

    // Introduction
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.support, component: Support },

    // Insurance
    { path: config.routes.insurances, component: Insurances },
    { path: config.routes.insuranceDetail, component: InsuranceDetailt },

    // Registration FOrm
    { path: config.routes.registrationForm, component: RegistrationForm},

    // Contract
    { path: config.routes.contracts, component: Contracts },
    { path: config.routes.contractDetail, component: ContractDetail },
    { path: config.routes.contractPayment, component: ContractPayment },
    { path: config.routes.contractPaymentHistory, component: ContractPaymentHistory },
    //Payment
    {path: config.routes.paymentRequest, component: PaymentRequest},
];

export { privateRoutes, publicRoutes };
