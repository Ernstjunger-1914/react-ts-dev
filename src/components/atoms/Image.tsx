import React from 'react';
import styled, { css } from 'styled-components';

const StyledImage = styled.img<ImageProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;

    &:hover {
        ${(props) => {
            if(props.hoverImage) {
                return css<StyledImageProps>`
                    cursor: pointer;
                    content: url(${(props) => props.hoverImage});
                `;
            }

            if(props.onClick) {
                return css<StyledImageProps>`
                    cursor: pointer;
                    opacity: 0.6;
                `;
            }
        }};
    }

    &:active {
        ${(props) => {
            if(props.hoverImage || props.onClick) {
                return css<StyledImageProps>`
                    opacity: 0.8;
                `;
            }
        }};
    }
`;

/**
 * @description Image 컴포넌트
 */
function Image({ src, alt, onClick, ...rest }: ImageProps) {
    return (
        <StyledImage
            src={src}
            onClick={onClick}
            alt={alt}
            {...rest}
        />
    );
}

interface StyledImageProps {
    readonly width: number;
    readonly height: number;
    readonly hoverImage?: string;
};

interface ImageProps extends StyledImageProps {
    readonly alt?: string;
    readonly src: string;
    readonly onClick?: () => void;
};

Image.defaultProps = {
    width: 2,
    height: 5
};

export default Image;