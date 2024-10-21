import { BsCart3 } from "react-icons/bs"
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from "./header.style"
import { useNavigate } from "react-router-dom";


export const Header = () => {

    const navigate = useNavigate();

    const handleLoginClick = (route: string) => {
        navigate(route);
    }

    return(
        <HeaderContainer>
            <HeaderTitle>Ecommerce</HeaderTitle>

            <HeaderItems>
                <HeaderItem onClick={() => handleLoginClick("/")}>Explorar</HeaderItem>
                <HeaderItem onClick={() => handleLoginClick("/login")}>Login</HeaderItem>
                <HeaderItem onClick={() => handleLoginClick("/sign-up")}>Criar conta</HeaderItem>
                <HeaderItem><BsCart3 size={25}/><span></span>5</HeaderItem>
                <HeaderItem>Sair</HeaderItem>
            </HeaderItems>

        </HeaderContainer>
    );

}