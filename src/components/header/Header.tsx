import { BsCart3 } from "react-icons/bs"
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from "./header.style"
import { useNavigate } from "react-router-dom";
import { signOutFirebase } from "../../service/user-service";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CustomButton } from "../buttom/CustomButton";


export const Header = () => {

    const navigate = useNavigate();

    const { isAuthenticated } = useContext(UserContext)

    const handleLoginClick = (route: string) => {
        navigate(route);
    }

    const handleSignOutClick = () => {
        signOutFirebase();
    }

    return(
        <HeaderContainer>
            <HeaderTitle onClick={() => handleLoginClick("/")}>Ecommerce</HeaderTitle>

            <HeaderItems>
                <HeaderItem onClick={() => handleLoginClick("/explore")}>Explorar</HeaderItem>

                {!isAuthenticated && (
                    <>
                        <HeaderItem onClick={() => handleLoginClick("/login")}>Login</HeaderItem>
                        <HeaderItem onClick={() => handleLoginClick("/sign-up")}>Criar conta</HeaderItem>
                    </>
                )}

                <HeaderItem><BsCart3 size={25}/><span></span>5</HeaderItem>

                {isAuthenticated && (
                    <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
                )}
                
            </HeaderItems>

        </HeaderContainer>
    );

}