import { BsGoogle } from "react-icons/bs";
import { CustomButton } from "../../components/buttom/CustomButton";
import { Header } from "../../components/header/Header";
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.styles";
import { FiLogIn } from "react-icons/fi";
import { CustomInput } from "../../components/input/CustomInput";
import { useForm } from "react-hook-form";
import { InputErrorMessage } from "../../components/input_error_message/InputErrorMessage";
import validator from "validator";
import { LoginForm } from "../../types/LoginForm";
import { loginFirebase } from "../../service/user-service";



export const LoginPage = () => {

    const {register, formState: {errors}, handleSubmit, setError} = useForm<LoginForm>();

    const handleSubmitPress = async (data: LoginForm) => {
        const response = await loginFirebase(data);
        if(response != null){
            setError(response.campo, {type: response.type})
        }
    }

    return (
        <>
            <Header />

            <LoginContainer>
                <LoginContent>

                    <LoginHeadline>Entre com a sua conta</LoginHeadline>

                    <CustomButton startIcon={<BsGoogle size={18} />}>Entrar com o Google</CustomButton>

                    <LoginSubtitle>ou entre com seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        <p>E-mail</p>
                        <CustomInput placeholder="Digite seu e-mail" hasError={!!errors?.email} {...register("email", {required: true, validate: (value) => validator.isEmail(value)})} />
                        {errors?.email?.type === "required" && <InputErrorMessage children="E-mail é obrigatório" />}
                        {errors?.email?.type === "validate" && <InputErrorMessage children="E-mail inválido" />}
                        {errors?.email?.type === "invalid-credential" && <InputErrorMessage children={"E-mail e/ou senha não conferem"} />}
                    </LoginInputContainer>

                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput 
                            type="password" 
                            placeholder="Digite sua senha" 
                            hasError={!!errors?.password || errors?.email?.type === "invalid-credential"} 
                            {...register("password", {required: true})}/>
                        {errors?.password?.type === "required" && <InputErrorMessage children="Senha é obrigatório" />}
                        {errors?.password?.type === "mismatch" && <InputErrorMessage children={"Senha inválida"} />}
                        {errors?.email?.type === "invalid-credential" && <InputErrorMessage children={"E-mail e/ou senha não conferem"} />}
                    </LoginInputContainer>

                    <CustomButton startIcon={<FiLogIn size={18}/>} onClick={() => handleSubmit(handleSubmitPress)()}>Entrar</CustomButton>

                </LoginContent>

            </LoginContainer>

        </>
    );

}