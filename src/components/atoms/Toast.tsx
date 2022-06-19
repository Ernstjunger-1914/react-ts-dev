import React from 'react';
import { Toaster, ToastPosition } from 'react-hot-toast';

/**
 * @description Toast 컴포넌트
 */
function Toast({ position }: IToast) {
    return (
        <Toaster position={position} />
    );
}

interface IToast {
    position: ToastPosition;
};

Toast.defaultProps = {
    position: 'top-center'
};

export default Toast;