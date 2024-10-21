import { BsCart3 } from "react-icons/bs"
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from "./header.style"


export const Header = () => {


    return(
        <HeaderContainer>
            <HeaderTitle>Ecommerce</HeaderTitle>

            <HeaderItems>
                <HeaderItem>Explorar</HeaderItem>
                <HeaderItem>Login</HeaderItem>
                <HeaderItem>Criar conta</HeaderItem>
                <HeaderItem><BsCart3 size={25}/><span></span>5</HeaderItem>
                <HeaderItem>Sair</HeaderItem>
            </HeaderItems>

        </HeaderContainer>
    );

}