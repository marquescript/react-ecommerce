import { BsCartPlus } from "react-icons/bs";
import { Product } from "../../types/Product";
import { CustomButton } from "../buttom/CustomButton";
import { ProductContainer, ProductImage, ProductInfo } from "./product_item.style";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export const ProductItem = ({product}: {product: Product}) => {

    const { addProductToCart } = useContext(CartContext);

    const handleClickCart = () => {
        addProductToCart(product);
    }

    return (
        <>
            <ProductContainer>
                <ProductImage imageUrl={product.imageUrl}>
                    <CustomButton onClick={handleClickCart} startIcon={<BsCartPlus />}>Adicionar ao carrinho</CustomButton>
                </ProductImage>
                <ProductInfo>
                    <p>{product.name}</p>
                    <p>R${product.price}</p>
                </ProductInfo>
            </ProductContainer>
        </>
    );

}