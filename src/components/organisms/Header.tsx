import { Button, Link, Span } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/colors';
import { useHistory } from 'react-router-dom';

const StyledHeader = styled.header`
    background: ${Colors.snow};
    height: 50px;
    line-height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem calc((100vw - 1000px) / 2);
    z-index: 10;
    border-top: 0px solid ${Colors.lightgray2};
    border-right: 0px solid ${Colors.lightgray2};
    border-left: 0px solid ${Colors.lightgray2};
    border-bottom: 1px solid ${Colors.lightgray2};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 10px 0px;
`;

const LogoDiv = styled.div`
    padding: 10px 20px 10px 20px;
    font-family: Helvetica, arial, freesans, clean, sans-serif;
    text-decoration: none solid rgb(119, 119, 119);
    height: 25px;
    float: left;
    color: ${Colors.gray2};
	font-size: 20px;
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
            <LogoDiv>
                <Link path='/'>
                    <Span
                        fontFamily='Helvetica'
                        fontColor={Colors.gray2}
                    >SSD</Span>
                </Link>
            </LogoDiv>
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