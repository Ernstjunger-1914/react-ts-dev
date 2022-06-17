import React from 'react';
import App from 'App';
import { GlobalStyle } from 'styles/global/global-styles';
import { BrowserRouter } from 'react-router-dom';

function Root() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <GlobalStyle />
                <App />
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default Root;