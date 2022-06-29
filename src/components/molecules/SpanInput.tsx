import { Input, Span } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/colors';

const Wrapper = styled.div`
    padding-bottom: 20px;
`;

const Interval = styled.span<IntervalProps>`
    padding-left: 0.5rem;
    padding-right: ${(props) => props.paddingRight ? `${props.paddingRight}px` : '0.5rem'};
`;

function SpanInput({
    inputBorderRadius,
    inputCustomStyle,
    inputWidth,
    inputHeight,
    inputWeight,
    inputName,
    inputMaxLength,
    inputPlaceHolder,
    inputSize,
    inputType,
    inputValue,
    inputImage,
    inputOnChange,
    textColor,
    textSize,
    textValue,
    textWeight,
    paddingRight
}: SpanInputProps) {
    return (
        <Wrapper>
            <Span fontColor={textColor} fontSize={textSize} fontWeight={textWeight}>
                {textValue}
            </Span>
            <Interval paddingRight={paddingRight} />
            <Input
                name={inputName}
                type={inputType}
                value={inputValue}
                placeholder={inputPlaceHolder}
                onChange={inputOnChange}
                borderRadius={inputBorderRadius}
                customStyle={inputCustomStyle}
                width={inputWidth}
                height={inputHeight}
                fontWeight={inputWeight}
                logoImage={inputImage}
                fontSize={inputSize}
                maxLength={inputMaxLength}
            />
        </Wrapper>
    );
}

interface IntervalProps {
    paddingRight?: number;
};

interface SpanInputProps extends IntervalProps {
    inputDisabled: boolean;
    inputBorderRadius: number;
    inputCustomStyle?: string;
    inputWidth: number;
    inputHeight?: number;
    inputWeight: string | number;
    inputName: string;
    inputMaxLength?: number;
    inputPlaceHolder: string;
    inputSize: number;
    inputType?: string;
    inputValue: string;
    inputImage?: string;
    inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    textColor: string;
    textSize: number;
    textValue: string;
    textWeight: string;
};

SpanInput.defaultProps = {
    inputDisabled: false,
    inputBorderRadius: 0,
    inputSize: 1,
    inputPlaceHolder: '',
    inputWidth: 7,
    inputWeight: 700,
    textWeight: 600,
    inputType: 'input',
    textSize: 1,
    textColor: Colors.black
};

export default SpanInput;