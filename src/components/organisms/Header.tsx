import { Link } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/colors';

const StyledHeader = styled.header`
    background: ${Colors.white};
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
`;

const MenuDiv = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

/**
 * @description Header 컴포넌트
 */
function Header() {
    return (
        <StyledHeader>
            <Link path='/'>SSD</Link>
            <MenuDiv>
                <Link path='/'>Home</Link>
            </MenuDiv>
        </StyledHeader>
    );
}

export default Header;