import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }

    /* Chrome */
    ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 6px;
        -webkit-border-radius: 6px;
        background-color: rgba(0, 0, 0, 0.2);
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb:active {
        /* Color */
        background-color: rgba(0, 0, 0, 0.4);
    }
`;