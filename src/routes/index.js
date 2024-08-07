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
import ContractPaymentInfo from '../pages/contract/PaymentInfo';

//Payment
import PaymentRequest from '../pages/payment/PaymentRequest';

import { AdminLayout } from '../layout/Admin';

import LoginAdmin from '../pages/admin/auth/login';
import LogoutAdmin from '../pages/admin/auth/logout';

import GeneralAdmin from '../pages/admin/general';
import UserAdmin from '../pages/admin/user';
import RegistrationAdmin from '../pages/admin/registration';
import BeneficiaryAdmin from '../pages/admin/beneficiary';
import PaymentRequestAdmin from '../pages/admin/paymentRequest';

const publicRoutes = [];

const privateRoutes = [
    //
    // == User ==
    //
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
    { path: config.routes.registrationForm, component: RegistrationForm },
    { path: config.routes.contractPaymentInfo, component: ContractPaymentInfo },

    // Contract
    { path: config.routes.contracts, component: Contracts },
    { path: config.routes.contractDetail, component: ContractDetail },
    { path: config.routes.contractPayment, component: ContractPayment },

    //Payment
    { path: config.routes.paymentRequest, component: PaymentRequest },

    //Profile
    { path: config.routes.profile, component: Profile },

    //
    // == Admin ==
    //
    { path: config.routes.adminLogin, component: LoginAdmin, layout: null },
    { path: config.routes.adminLogout, component: LogoutAdmin, layout: null },

    // General
    { path: config.routes.adminGeneral, component: GeneralAdmin, layout: AdminLayout },
    { path: config.routes.adminUser, component: UserAdmin, layout: AdminLayout },
    { path: config.routes.adminRegistration, component: RegistrationAdmin, layout: AdminLayout },
    { path: config.routes.adminBeneficiary, component: BeneficiaryAdmin, layout: AdminLayout },
    { path: config.routes.adminPaymentRequest, component: PaymentRequestAdmin, layout: AdminLayout },
];

export { privateRoutes, publicRoutes };
