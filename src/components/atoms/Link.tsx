import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(ReactRouterLink)({
    textDecoration: 'none'
}) as ReactRouterLink;

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