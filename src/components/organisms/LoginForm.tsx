import { Button, Input, Span } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/colors';

const StyledWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    width: 25rem;
    margin: 0 auto;
`;

const StyledTitle = styled.div`
    margin-bottom: 30px;
`;

const StyledLoginForm = styled.div`
    width: 400px;
    display: flex;
`;

const StyledInput = styled.div`
    margin-bottom: 15px;
`;

const StyledButton = styled.div`
    margin-right: 50px;
    margin-left: 50px;
    width: calc(100% - 100px);
`;

/**
 * @description LoginForm 컴포넌트
 */
function LoginForm() {
    return (
        <StyledWrapper>
            <StyledTitle>
                <Span
                    fontSize={50}
                    fontWeight='bolder'
                >
                    SSD
                </Span>
            </StyledTitle>
            <StyledLoginForm>
                <StyledInput>
                    <Input
                        height={2}
                        type='email'
                        placeholder='Email'
                    />
                </StyledInput>
                <StyledInput>
                    <Input
                        height={2}
                        type='password'
                        placeholder='Password'
                    />
                </StyledInput>
                <StyledButton>
                    <Button>
                        <Span>
                            로그인
                        </Span>
                    </Button>
                </StyledButton>
            </StyledLoginForm>
        </StyledWrapper>
    );
}

export default LoginForm;