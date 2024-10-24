import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { CheckoutContainer, CheckoutProducts, CheckoutTitle, CheckoutTotal } from "./checkout.style";
import { CustomButton } from "../buttom/CustomButton";
import { BsBagCheck } from "react-icons/bs";
import { CartItem } from "../cart_item/CartItem";


export const Checkout = () => {

    const { products, totalPrice } = useContext(CartContext);

    return (
        <>
            <CheckoutContainer>
                <CheckoutTitle>Checkout</CheckoutTitle>

                {products.length > 0 && (
                    <>
                        <CheckoutProducts>
                            {products.map((product) => (
                                <CartItem key={product.id} product={product} />
                            ))}
                        </CheckoutProducts>
        
                        <CheckoutTotal>Total: R${totalPrice}</CheckoutTotal>
        
                        <CustomButton startIcon={<BsBagCheck />} >Finalizar Compra</CustomButton>
                    </>
                )}

                {products.length == 0 && <p>O carrinho está vazio!</p>}



            </CheckoutContainer>
        </>
    );

}