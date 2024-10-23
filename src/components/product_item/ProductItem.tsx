import { Product } from "../../types/Product";
import { ProductContainer, ProductImage, ProductInfo } from "./product_item.style";


export const ProductItem = ({product}: {product: Product}) => {


    return (
        <>
            <ProductContainer>
                <ProductImage imageUrl={product.imageUrl} />
                <ProductInfo>
                    <p>{product.name}</p>
                    <p>R${product.price}</p>
                </ProductInfo>
            </ProductContainer>
        </>
    );

}