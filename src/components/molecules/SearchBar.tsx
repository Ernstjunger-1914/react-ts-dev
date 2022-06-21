import React, { useCallback } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const StyledInpt = styled.input`
    padding-right: 5px;
`;

const StyledButton = styled.button`
    padding-left: 5px;
`;

function SearchBar() {
    return (
        <Wrapper>
            <StyledInpt></StyledInpt>
            <StyledButton></StyledButton>
        </Wrapper>
    );
}

interface SearchBarProps {
    search: string;
    borderColor?: string;
    borderWidth?: number;
    inputWidth: number;
    inputHeight: number;
    inputPlaceHolder: string;
    buttonWidth?: number;
    buttonHeight?: number;
    buttonColor?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClickSearch?: () => void;
};

export default SearchBar;