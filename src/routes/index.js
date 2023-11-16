import config from '../config';

// Auth
import Login from '../pages/auth/login';
import Logout from '../pages/auth/logout';

// Home
import Home from '../pages/home';

// Insurance
import Insurances from '../pages/insurance/insurances';
import InsuranceDetailt from '../pages/insurance/detail';

// Contracts
import Contracts from '../pages/contract/contracts';
import ContractDetail from '../pages/contract/detail';

const publicRoutes = [];

const privateRoutes = [
    // Authentication
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.logout, component: Logout, layout: null },

    // Introduction
    { path: config.routes.home, component: Home },

    // Insurance
    { path: config.routes.insurances, component: Insurances },
    { path: config.routes.insuranceDetail, component: InsuranceDetailt },

    // Contract
    { path: config.routes.contracts, component: Contracts },
    { path: config.routes.contractDetail, component: ContractDetail },
];

export { privateRoutes, publicRoutes };
