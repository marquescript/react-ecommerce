import { ButtonHTMLAttributes, ReactNode } from "react";
import { CustomButtonContainer, IconContainer } from "./button.style";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    startIcon?: ReactNode; 
    children: React.ReactNode;
}

export const CustomButton = ({children, startIcon, ...rest}: CustomButtonProps) => {

    return (
        <CustomButtonContainer {...rest}>
            {startIcon && <IconContainer>{startIcon}</IconContainer>}
            {children}
        </CustomButtonContainer>
    );

}