import { darken, lighten } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';
import { Colors } from 'utils/colors';

const StyledInput = styled.input<StyledInputProps>`
    border: none;
    outline: none;

    padding-left: ${(props) => {
        if(props.textAlign) {
            if(props.logoImage) {
                return 30;
            } else {
                return props.paddingLeft;
            }
        } else {
            return 0;
        }
    }}px;

    padding-right: ${(props) => {
        if(props.textAlign === 3) {
            return 22;
        } else {
            return 0;
        }
    }}px;

    border-radius: ${(props) => props.borderRadius}px;
    border-style: ${(props) => props.borderStyle}px;
    border-width: ${(props) => props.borderWidth}px;
    width: ${(props) => props.width}rem;
    height: ${(props) => props.height}rem;

    ${(props) => {
        if(props.logoImage) {
            return css`
                background-image: url(${props.logoImage});
                background-position: 5%;
                background-repeat: no-repeat;
            `;
        }
    }}

    font-size: ${(props) => props.fontSize}px;
    font-weight: ${(props) => props.fontWeight};
    font-family: ${(props) => props.fontFamily};

    text-align: ${(props) => {
        if(props.textAlign === 1) {
            return 'left';
        } else if(props.textAlign === 2) {
            return 'center';
        } else if(props.textAlign === 3) {
            return 'right';
        }
    }};

    font-stretch: normal;
    letter-spacing: normal;
    box-sizing: border-box;

    border-color: ${(props) => props.borderColor};
    color: ${(props) => props.fontColor};

    :focus {
        box-shadow: 0 0 5px ${(props) => darken(0.1, props.borderColor)};
        outline: none !important;
    }

    ::placeholder {
        color: ${(props) => {
            if(props.placeholder) {
                return props.placeholder;
            }
            return lighten(0.25, props.fontColor);
        }};
        font-weight: 400;
    }

    /* Chrome */
    ::-webkit-search-cancel-button {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        background-position: 5%;
        background-repeat: no-repeat;

        &:hover {
            opacity: 0.7;
        }

        &:active {
            opacity: 0.9;
        }
    }

    ${(props) => props.customStyle};
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
        <StyledInput
            disabled={disabled}
            maxLength={maxLength === 0 ? 3000 : maxLength}
            type={type}
            name={name}
            value={value}
            ref={innerReference}
            placeholder={placeholder}
            onChange={onChange}
            onKeyUp={onKeyUP}
            onKeyDown={onKeyDown}
            {...rest}
        />
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

Input.defaultProps = {
    type: 'text',
    value: '',
    width: 20,
    height: 15,
    borderColor: Colors.blue,
    borderRadius: 16,
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: 10,
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    textAlign: 2,
    fontColor: Colors.white,
    disabled: false,
    maxLength: 3000,
    readOnly: false,
    paddingLeft: 22
};

export default Input;