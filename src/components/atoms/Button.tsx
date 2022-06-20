import React from 'react';
import styled, { css } from 'styled-components';
import { Colors } from 'utils/colors';

const StyledButton = styled.button<ButtonProps>`
    border: none;
    outline: none;

    border-color: ${(props) => props.borderColor};
    border-radius: ${(props) => props.borderRadius}px;
    border-style: ${(props) => props.borderStyle};
    border-width: ${(props) => props.borderWidth}px;
    width: ${(props) => props.width}rem;
    height: ${(props) => props.height}rem;

    ${(props) => {
        if(props.image) {
            return css<StyledButtonProps>`
                background-image: url(${(props) => props.image});
                background-repeat: no-repeat;
                background-size: ${(props) => props.imageWidth}px ${(props) => props.imageHeight}px;
            `;
        }
    }}

    background-color: ${(props) => props.backgroundColor || props.theme.color.button};

    &:hover {
        cursor: pointer;
        ${(props) => {
            if(props.hoverImage) {
                return css<StyledButtonProps>`
                    background-image: url(${(props) => props.image});
                    background-repeat: no-repeat;
                    background-size: ${(props) => props.imageWidth}rem ${(props) => props.imageHeight}rem;
                `;
            } else {
                return css`
                    opacity: 0.8;
                `;
            }
        }}
    }

    &:active {
        opacity: 0.9;
    }

    ${(props) => props.customStyle}
`;

/**
 * @description Button 컴포넌트
 */
function Button({ children, onClick, ...rest }: ButtonProps) {
    return (
        <StyledButton onClick={onClick} {...rest}>
            {children}
        </StyledButton>
    );
}

interface StyledButtonProps {
    readonly backgroundColor?: string;
    readonly borderColor?: string;
    readonly borderRadius?: number;
    readonly borderStyle?: string;
    readonly borderWidth?: number;
    readonly customStyle?: string;
    readonly fontSize: number;
    readonly fontColor: string;
    readonly height: number;
    readonly hoverImage?: string;
    readonly image?: string;
    readonly width: number;
    readonly imageWidth?: number;
    readonly imageHeight?: number;
};

interface ButtonProps extends StyledButtonProps {
    readonly children?: React.ReactChild;
    readonly disable: boolean;
    readonly onClick?: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
};

Button.defaultProps = {
    borderRadius: 16,
    borderStyle: 'none',
    disabled: false,
    fontColor: Colors.white,
    fontSize: 1,
    height: 2.3,
    width: 15
};

export default React.memo(Button);