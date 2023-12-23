import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import GlobalStyles from './components/GlobalStyles';
import { Toaster } from '@/components/ui/toaster';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="758714797728-tdqjo4g8cnq4ladmdqr7cu8ojd55pbl2.apps.googleusercontent.com">
            <GlobalStyles>
                <App />
                <Toaster />
            </GlobalStyles>
        </GoogleOAuthProvider>
    </React.StrictMode>,
);
