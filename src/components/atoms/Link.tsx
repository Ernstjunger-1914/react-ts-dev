import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'utils/colors';

const StyledLink = styled(ReactRouterLink)`
    align-items: center;
    color: ${Colors.black};
    display: flex;
    text-decoration: none;
    height: 100%;
    cursor: pointer;

    &:active {
        color: ${Colors.lightgray};
    }
`;

/**
 * @description Link 컴포넌트
 */
function Link({ children, path, onClick }: LinkProps) {
    return (
        <StyledLink to={path} onClick={onClick}>
            {children}
        </StyledLink>
    );
}

interface LinkProps {
    children: React.ReactChild;
    path: string;
    onClick?: () => void;
};

export default Link;