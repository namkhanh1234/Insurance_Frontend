const routes = {
    // Auth
    login: '/login',
    logout: '/logout',
    register: '/register',
    forgotPassword: '/forgotPassword',

    // Home
    home: '/',

    // Profile
    profile: '/profile/:id',

    // Support
    support: '/support',

    // Insurance
    insurances: '/insurances',
    insuranceDetail: '/insurances/:id',

    // Registration insurance package

    // Registration Form
    registrationForm: '/registerinsurance',
    contractPaymentInfo: '/contractPaymentInfo',

    // Contract insurance
    contracts: '/contracts',
    contractDetail: '/contracts/:id',
    contractPayment: '/contracts/payment',

    // Customer service

    //Payment
    paymentRequest: '/paymentRequest',

    // Admin
    adminLogin: '/admin/login',
    adminLogout: '/admin/logout',

    adminGeneral: '/admin/general',
    adminUser: '/admin/users',
    adminRegistration: '/admin/registrations',
    adminBeneficiary: '/admin/beneficiaries',
    adminPaymentRequest: '/admin/paymentrequests',
};

export default routes;
