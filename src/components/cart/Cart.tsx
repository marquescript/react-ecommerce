import { BsCartCheck } from "react-icons/bs";
import { CustomButton } from "../buttom/CustomButton";
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from "./cart.style";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export const Cart = () => {

    const { isVisible, toggleCart } = useContext(CartContext);

    return (
        <>
            <CartContainer isVisible={isVisible}>
                <CartEscapeArea onClick={toggleCart} />
                    <CartContent>
                        <CartTitle>Seu carrinho</CartTitle>

                        <CartTotal>Total: R$999</CartTotal>
                        <CustomButton startIcon={<BsCartCheck />}>Ir para o checkout</CustomButton>
                    </CartContent>
            </CartContainer>
        </>
    );

}