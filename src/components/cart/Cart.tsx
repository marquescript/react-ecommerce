import { BsCartCheck } from "react-icons/bs";
import { CustomButton } from "../buttom/CustomButton";
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from "./cart.style";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartItem } from "../cart_item/CartItem";


export const Cart = () => {

    const { isVisible, toggleCart, products } = useContext(CartContext);

    return (
        <>
            <CartContainer isVisible={isVisible}>
                <CartEscapeArea onClick={toggleCart} />
                    <CartContent>
                        <CartTitle>Seu carrinho</CartTitle>

                        {products.map((product) => (
                            <CartItem key={product.id} product={product} />
                        ))}

                        <CartTotal>Total: R$999</CartTotal>
                        <CustomButton startIcon={<BsCartCheck />}>Ir para o checkout</CustomButton>
                    </CartContent>
            </CartContainer>
        </>
    );

}