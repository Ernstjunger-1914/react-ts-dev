import { Link } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

/**
 * @description Header 컴포넌트
 */
function Header() {
    return (
        <StyledHeader>
            <p>SSD</p>
            <Link path='/'>Home</Link>
        </StyledHeader>
    );
}

export default Header;