import { FiLogIn } from "react-icons/fi";
import { CustomButton } from "../../components/buttom/CustomButton";
import { Header } from "../../components/header/Header";
import { CustomInput } from "../../components/input/CustomInput";
import { SignUpContainer, SignUpContent, SignUpHeadline, SignUpInputContainer } from "./sign-up.style";
import { useForm } from "react-hook-form";
import { InputErrorMessage } from "../../components/input_error_message/InputErrorMessage";
import validator from "validator";

interface SignUpForm {
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const SignUpPage = () => {

    const {register, formState: {errors}, handleSubmit, watch} = useForm<SignUpForm>();

    const watchPassword = watch("password");

    const handleSubmitPress = (data: SignUpForm) => {

    }

    return (
        <>
            <Header />

            <SignUpContainer>
                <SignUpContent>
                    <SignUpHeadline>Crie sua conta</SignUpHeadline>

                    <SignUpInputContainer>
                        <p>Nome</p>
                        <CustomInput placeholder="Digite seu nome" hasError={!!errors?.name} {...register("name", {required: true})} />
                        {errors?.name?.type === "required" && <InputErrorMessage children="O campo nome é obrigatório"/>}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Sobrenome</p>
                        <CustomInput placeholder="Digite seu sobrenome" hasError={!!errors?.lastName} {...register("lastName", {required: true})} />
                        {errors?.lastName?.type === "required" && <InputErrorMessage children="O campo sobrenome é obrigatório" />}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>E-mail</p>
                        <CustomInput placeholder="Digite seu e-mail" hasError={!!errors?.email} {...register("email", {required: true, validate: (value) => validator.isEmail(value)})} />
                        {errors?.email?.type === "required" && <InputErrorMessage children="O campo e-mail é obrigatório" />}
                        {errors?.email?.type === "validate" && <InputErrorMessage children="E-mail inválido" />}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Senha</p>
                        <CustomInput type="password" placeholder="Digite sua senha" hasError={!!errors?.password} {...register("password", {required: true})} />
                        {errors?.password?.type === "required" && <InputErrorMessage children="O campo senha é obrigatório" />}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Confirmar senha</p>
                        <CustomInput type="password" placeholder="Digite novamente sua senha" hasError={!!errors?.confirmPassword} 
                            {...register("confirmPassword", {required: true, validate: (value) => value == watchPassword})} />
                        {errors?.confirmPassword?.type === "required" && <InputErrorMessage children="O campo confirmar senha é obrigatório" />}
                        {errors?.confirmPassword?.type === "validate" && <InputErrorMessage children="O campo confirmar senha deve ser igual a senha" />}
                    </SignUpInputContainer>

                    <CustomButton startIcon={<FiLogIn size={18} />} onClick={() => handleSubmit(handleSubmitPress)()}>Criar conta</CustomButton>

                </SignUpContent>
            </SignUpContainer>
        </>

    );

}