import React from 'react';
import App from './App';
import { GlobalStyle } from 'styles/global/global-styles';

function Root() {
    return (
        <React.StrictMode>
            <GlobalStyle />
            <App />
        </React.StrictMode>
    );
}

export default Root;