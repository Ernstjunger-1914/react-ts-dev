import React from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
    outline: none;
    resize: none;
    border: none;
`;

/**
 * @description TextArea 컴포넌트
 */
function TextArea() {
    return (
        <div>
            
        </div>
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

interface TextAreaProps extends StyledTextAreaProps {};

export default TextArea;