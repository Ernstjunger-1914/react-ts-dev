import { darken, lighten } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledSpan = styled.span<StyledSpanProps>`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    font-family: ${(props) => props.fontFamily};
    letter-spacing: ${(props) => props.letterSpacing}px;
    line-height: ${(props) => props.lineHeight};
    color: ${(props) => props.fontColor};

    ${(props) => {
        if(props.onClick) {
            return css<StyledSpanProps>`
                cursor: pointer;

                &:hover {
                    color: ${lighten(0.2, props.fontColor!)};
                }

                &:active {
                    color: ${darken(0.2, props.fontColor!)};
                }
            `;
        }

        if(props.minWidth) {
            return css<StyledSpanProps>`
                min-width: ${(props) => props.minWidth}px;
            `;
        }
    }};
`;

/**
 * @description Span 컴포넌트
 */
function Span({ children, onClick, ...props }: SpanProps) {
    return (
        <StyledSpan onClick={onClick} {...props}>
            {children}
        </StyledSpan>
    );
}

interface StyledSpanProps {
    readonly fontSize: number;
    readonly fontColor?: string;
    readonly fontFamily: string;
    readonly fontWeight: string | number;
    readonly letterSpacing: string | number;
    readonly lineHeight?: number;
    readonly minWidth?: number;
};

interface SpanProps extends StyledSpanProps {
    children: string | number | React.ReactChild;
    onClick?: () => void;
};

Span.defaultProps = {
    fontSize: 12,
    fontFamily: 'sans-serif',
    fontWeight: 'normal',
    letterSpacing: 'normal'
};

export default Span;