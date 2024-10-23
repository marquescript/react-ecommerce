import { BsCart3 } from "react-icons/bs"
import { HeaderContainer, HeaderItem, HeaderItems, HeaderTitle } from "./header.style"
import { useNavigate } from "react-router-dom";
import { signOutFirebase } from "../../service/user-service";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";


export const Header = () => {

    const navigate = useNavigate();
    const { toggleCart } = useContext(CartContext);
    const { isAuthenticated } = useContext(UserContext)
    const { products } = useContext(CartContext);

    const handleLoginClick = (route: string) => {
        navigate(route);
    }

    const handleSignOutClick = () => {
        signOutFirebase();
    }

    const handleCalculateQuantityProductsInCart = () => {
        let totalQuantity = 0;
        products.forEach(product => {
            totalQuantity += product.quantity;
        });
        return totalQuantity;
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

                <HeaderItem onClick={toggleCart}>
                    <span>{handleCalculateQuantityProductsInCart()}</span>
                    <BsCart3 size={25}/>
                </HeaderItem>

                {isAuthenticated && (
                    <HeaderItem onClick={handleSignOutClick}>Sair</HeaderItem>
                )}
                
            </HeaderItems>

        </HeaderContainer>
    );

}