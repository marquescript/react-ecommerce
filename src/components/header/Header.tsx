import { BsCart3 } from "react-icons/bs"
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from "./header.style"
import { useNavigate } from "react-router-dom";
import { signOutFirebase } from "../../service/user-service";


export const Header = () => {

    const navigate = useNavigate();

    const handleLoginClick = (route: string) => {
        navigate(route);
    }

    const handleSignOutClick = () => {
        signOutFirebase();
    }

    return(
        <HeaderContainer>
            <HeaderTitle>Ecommerce</HeaderTitle>

            <HeaderItems>
                <HeaderItem onClick={() => handleLoginClick("/")}>Explorar</HeaderItem>
                <HeaderItem onClick={() => handleLoginClick("/login")}>Login</HeaderItem>
                <HeaderItem onClick={() => handleLoginClick("/sign-up")}>Criar conta</HeaderItem>
                <HeaderItem><BsCart3 size={25}/><span></span>5</HeaderItem>
                <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
            </HeaderItems>

        </HeaderContainer>
    );

}