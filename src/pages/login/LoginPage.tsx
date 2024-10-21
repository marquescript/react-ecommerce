import { BsGoogle } from "react-icons/bs";
import { CustomButton } from "../../components/buttom/CustomButton";
import { Header } from "../../components/header/Header";
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.styles";
import { FiLogIn } from "react-icons/fi";

export const LoginPage = () => {


    return (
        <>
            <Header />

            <LoginContainer>
                <LoginContent>

                    <LoginHeadline>Entre com a sua conta</LoginHeadline>

                    <CustomButton startIcon={<BsGoogle size={18} />}>Entrar com o Google</CustomButton>

                    <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>

                    <LoginInputContainer></LoginInputContainer>
                    <LoginInputContainer></LoginInputContainer>

                    <CustomButton startIcon={<FiLogIn size={18}/>}>Entrar</CustomButton>

                </LoginContent>

            </LoginContainer>

        </>
    );

}