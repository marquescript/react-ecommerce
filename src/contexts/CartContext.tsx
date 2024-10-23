import { createContext, ReactNode, useState } from "react";
import { Cart } from "../types/Cart";
import { Product } from "../types/Product";

interface ICartContext {
    isVisible: boolean;
    toggleCart: () => void;
    products: Cart[];
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => {},
    addProductToCart: () => {},
    removeProductFromCart: () => {}
});

export const CartContextProvider = ({children}: {children: ReactNode}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [products, setProducts] = useState<Cart[]>([]);

    const addProductToCart = (product: Product) => {
        const productInCart = products.some((item) => item.id === product.id);
        if(productInCart){
            const newProducts = products.map(item => item.id === product.id ? 
                {...item, quantity: item.quantity + 1} : item);
            return setProducts(newProducts);
        }
        setProducts([...products, {...product, quantity: 1}]);
    }

    const removeProductFromCart = (productId: string) => {
        setProducts((products) => products.filter((product) => product.id != productId))
    }

    const toggleCart = () => {
        setIsVisible(!isVisible);
    }

    return (
        <CartContext.Provider value={{isVisible, products, toggleCart, addProductToCart, removeProductFromCart}}>
            {children}
        </CartContext.Provider>
    );

}