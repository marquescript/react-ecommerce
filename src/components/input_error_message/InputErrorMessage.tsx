import { ReactNode } from "react";
import { InputErrorMessageContainer } from "./input_error_message.style";

export const InputErrorMessage = ({children}: {children: ReactNode}) => {

    return (
        <InputErrorMessageContainer children={children} />
    );

}