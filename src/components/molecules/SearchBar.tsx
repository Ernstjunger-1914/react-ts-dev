import { Button, Input, Span } from 'components/atoms';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/colors';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const StyledInpt = styled.span`
    padding-right: 5px;
`;

const StyledButton = styled.span`
    padding-left: 5px;
`;

/**
 * @description SearchBar 컴포넌트
 */
function SearchBar({ 
    search,
    inputWidth,
    inputHeight,
    inputPlaceHolder,
    borderColor,
    borderWidth,
    buttonWidth,
    buttonHeight,
    buttonColor,
    onChange,
    onClickSearch
}: SearchBarProps) {
    const onKeyPress = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if(e.keyCode === 13) {
                onClickSearch!();
            }
        }, [onClickSearch]
    );

    return (
        <Wrapper>
            <StyledInpt>
                <Input
                    name='Search'
                    value={search!}
                    placeholder={inputPlaceHolder}
                    width={inputWidth}
                    height={inputHeight}
                    textAlign={1}
                    fontSize={14}
                    borderWidth={borderWidth}
                    borderColor={borderColor}
                    onChange={onChange}
                    onKeyDown={onKeyPress}
                />
            </StyledInpt>
            <StyledButton>
                <Button
                    width={buttonWidth}
                    height={buttonHeight}
                    backgroundColor={buttonColor}
                    onClick={onClickSearch}
                >
                    <Span
                        fontColor={Colors.white}
                        fontSize={14}
                        fontWeight={700}
                    >
                        검색
                    </Span>
                </Button>
            </StyledButton>
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

SearchBar.defaultProps = {
    inputWidth: 17,
    inputHeight: 2.5,
    inputPlaceHolder: '검색',
    buttonWidth: 7,
    buttonHeight: 2.5,
    buttonColor: Colors.silver,
    borderWidth: 1,
    borderColor: Colors.lightslategray
};

export default React.memo(SearchBar);