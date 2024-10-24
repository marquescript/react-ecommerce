import { BsCartCheck } from "react-icons/bs";
import { CustomButton } from "../buttom/CustomButton";
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from "./cart.style";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CartItem } from "../cart_item/CartItem";
import { useNavigate } from "react-router-dom";


export const Cart = () => {

    const { isVisible, toggleCart, products, totalPrice, totalQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    const handleNavigateCheckout = () => {
        navigate('/checkout');
        toggleCart();
    }

    return (
        <>
            <CartContainer isVisible={isVisible}>
                <CartEscapeArea onClick={toggleCart} />
                    <CartContent>
                        <CartTitle>Seu carrinho</CartTitle>

                        {products.map((product) => (
                            <CartItem key={product.id} product={product} />
                        ))}

                        {totalQuantity > 0 && (
                            <>
                                <CartTotal>Total: R${totalPrice}</CartTotal>
                                <CustomButton onClick={handleNavigateCheckout} startIcon={<BsCartCheck />}>Ir para o checkout</CustomButton>
                            </>
                        )} 

                        {totalQuantity == 0 && <p>O carrinho está vazio!</p>}


                    </CartContent>
            </CartContainer>
        </>
    );

}