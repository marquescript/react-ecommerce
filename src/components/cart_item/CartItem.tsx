import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Cart } from "../../types/Cart";
import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from "./cart_item.style";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export const CartItem = ({product}: {product: Cart}) => {

    const { removeProductFromCart } = useContext(CartContext);

    return (
        <>
            <CartItemContainer>
                <CartItemImage imageUrl={product.imageUrl} />
                <CartItemInfo>
                    <p>{product.name}</p>
                    <p>R${product.price}</p>

                    <CartItemQuantity>
                        <AiOutlineMinus size={20} />
                        <p>{product.quantity}</p>
                        <AiOutlinePlus size={20} />
                    </CartItemQuantity>

                </CartItemInfo>

                <RemoveButton onClick={() => removeProductFromCart(product.id)}>
                    <AiOutlineClose size={25} />
                </RemoveButton>

            </CartItemContainer>
        </>
    );

}