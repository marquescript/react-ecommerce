import React, { FunctionComponent, InputHTMLAttributes } from "react";
import { CustomInputContainer } from "./input.style";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement>{
    hasError?: boolean;
}

export const CustomInput: FunctionComponent<CustomInputProps> = React.forwardRef((props, ref) => {
    return (
        <CustomInputContainer {...props} ref={ref as any} />
    );
}) 

CustomInput.displayName = 'CustomInput';