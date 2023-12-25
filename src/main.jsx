import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import GlobalStyles from './components/GlobalStyles';
import { Toaster } from '@/components/ui/toaster';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}>
            <GlobalStyles>
                <App />
                <Toaster />
            </GlobalStyles>
        </GoogleOAuthProvider>
    </React.StrictMode>,
);
