import { Button, Image, Link, Span } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/colors';
import logo from 'images/logo.svg';
import { useHistory } from 'react-router-dom';

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
    let history = useHistory();

    const changeToLoginRoute = () => {
        let path = `/login`;
        history.push(path);
    }

    return (
        <StyledHeader>
            <Link path='/'>
                <Image src={logo} alt="logo" width={100} height={250} />
            </Link>
            <MenuDiv>
                <Link path='/'>Home</Link>
                <Link path='/about'>About</Link>
            </MenuDiv>
            <Button
                fontColor={Colors.black}
                width={5}
                onClick={changeToLoginRoute}
            >
                <Span
                    fontColor={Colors.black}
                    fontSize={14}
                >
                    로그인
                </Span>
            </Button>
        </StyledHeader>
    );
}

export default Header;