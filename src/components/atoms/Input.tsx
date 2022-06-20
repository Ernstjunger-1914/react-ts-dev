import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    border: none;
    outline: none;
`;

/**
 * @description Input 컴포넌트
 */
function Input({ 
    disabled, 
    name, 
    type, 
    placeholder, 
    maxLength, 
    readOnly, 
    value, 
    innerReference, 
    onChange, 
    onKeyUP, 
    onKeyDown, 
    ...rest 
}: InputProps) {
    return (
        <StyledInput />
    );
}

interface StyledInputProps {
    readonly borderColor: string;
    readonly borderRadius: number;
    readonly borderStyle: string;
    readonly borderWidth: string;
    readonly customStyle?: string;
    readonly fontColor: string;
    readonly fontFamily: string;
    readonly fontSize: number;
    readonly fontWeight: string | number;
    readonly width: number;
    readonly height: number;
    readonly logoImage?: string;
    readonly paddingLeft: number;
    readonly textAlign: number;
    readonly placeholderColor?: string;
};

interface InputProps extends StyledInputProps {
    readonly disabled: boolean;
    readonly name?: string;
    readonly maxLength: number;
    readonly type: string;
    readonly placeholder?: string;
    readonly value: string;
    readonly readOnly: boolean;
    readonly innerReference?: ((instance: HTMLInputElement) => void) |
        React.MutableRefObject<HTMLInputElement> |
        null
    readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readonly onKeyUP?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    readonly onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export default Input;