import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingSpin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const LoadingBackground = styled.body`
    background-color: #f9f9fa;
`;

const LoadingDiv = styled.div`
    border: 5px solid rgba(18, 65, 145, 255);
    border-radius: 50%;
    border-top: 5px solid #fff;
    width: 40px;
    height: 40px;
    animation: ${LoadingSpin} 1s linear infinite;
    margin: auto;
    left: 0;
    right: 0;
    top: 0px;
    bottom: 0;
    position: fixed;
`;

/**
 * @description 로딩 컴포넌트
 */
function Loading() {
    return (
        <LoadingBackground>
            <LoadingDiv />
        </LoadingBackground>
    );
}

export default Loading;