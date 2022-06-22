import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 100vh;
    min-width: 80rem;
    max-width: 200rem;
    width: 100vw;
    text-align: center;
`;

const Content = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
`;

/**
 * @description LoginTemplate 컴포넌트
 */
function LoginTemplate({ logo }: LoginTemplateProps) {
    return (
        <Wrapper>
            <Content>

            </Content>
        </Wrapper>
    );
}

interface LoginTemplateProps {
    logo: React.ReactChild;
};

export default LoginTemplate