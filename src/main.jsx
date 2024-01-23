import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import GlobalStyles from './components/GlobalStyles';
import { Toaster } from '@/components/ui/toaster';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';

import store from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
    //<React.StrictMode>
    <Provider store={store}>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}>
            <GlobalStyles>
                <App />
                <Toaster />
            </GlobalStyles>
        </GoogleOAuthProvider>
    </Provider>,
    //</React.StrictMode>,
);
