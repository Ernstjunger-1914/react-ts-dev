import { darken, lighten } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/colors';

const StyledTextArea = styled.textarea<StyledTextAreaProps>`
    outline: none;
    resize: none;
    border: none;

    padding-left: ${(props) => props.paddingLeft}px;
    padding-top: ${(props) => props.paddingTop}px;
    
    border-radius: ${(props) => props.borderRadius}px;
    border-style: ${(props) => props.borderStyle};
    border-width: ${(props) => props.borderWidth}px;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;

    font-size: ${(props) => props.fontSize};
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

    color: ${(props) => props.fontColor};
    border-color: ${(props) => props.borderColor};

    :focus {
        box-shadow: 0 0 5px ${(props) => darken(0.1, props.borderColor)};
        outline: none !important;
    }

    ::placeholder {
        color: ${(props) => {
            if(props.placeholderColor) {
                return props.placeholder;
            }
            return lighten(0.25, props.fontColor);
        }};
        font-weight: 400;
    }

    ${(props) => props.customStyle};
`;

/**
 * @description TextArea 컴포넌트
 */
function TextArea({ 
    disabled,
    name,
    placeholder,
    maxLength,
    readOnly,
    value,
    onChange,
    ...rest
 }: TextAreaProps) {
    return (
        <StyledTextArea 
            disabled={disabled}
            name={name}
            value={value}
            placeholder={placeholder}
            maxLength={maxLength}
            readOnly={readOnly}
            onChange={onChange}
            {...rest}
        />
    );
}

interface StyledTextAreaProps {
    readonly borderColor: string;
    readonly borderRadius: number;
    readonly borderStyle: string;
    readonly borderWidth: number;
    readonly customStyle?: string;
    readonly fontSize: number;
    readonly fontColor: string;
    readonly fontFamily: string;
    readonly fontWeight: string | number;
    readonly width: number;
    readonly height: number;
    readonly logoImage?: string;
    readonly paddingLeft: number;
    readonly paddingTop: number;
    readonly placeholderColor?: string;
    readonly textAlign: number;
};

interface TextAreaProps extends StyledTextAreaProps {
    readonly disabled: boolean;
    readonly name?: string;
    readonly maxLength: number;
    readonly placeholder?: string;
    readonly value: string;
    readonly readOnly: boolean;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

TextArea.defaultProps = {
    value: '',
    disabled: false,
    width: 20,
    height: 15,
    borderRadius: 16,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.gray,
    fontSize: 10,
    fontWeight: 'normal',
    fontFamily: 'sans-serif',
    textAlign: 1,
    fontColor: Colors.silver,
    maxLength: 5000,
    readOnly: false,
    paddingLeft: 10,
    paddingTop: 0
};

export default React.memo(TextArea);