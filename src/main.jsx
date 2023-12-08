import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App.jsx';
import GlobalStyles from './components/GlobalStyles';
import { Toaster } from '@/components/ui/toaster';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
            <Toaster />
        </GlobalStyles>
    </React.StrictMode>,
);
