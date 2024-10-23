import { createContext, ReactNode, useState } from "react";
import { Cart } from "../types/Cart";
import { Product } from "../types/Product";

interface ICartContext {
    isVisible: boolean;
    toggleCart: () => void;
    products: Cart[];
    addProductToCart: (product: Product) => void;
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => {},
    addProductToCart: () => {}
});

export const CartContextProvider = ({children}: {children: ReactNode}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [products, setProducts] = useState<Cart[]>([]);

    const addProductToCart = (product: Product) => {
        setProducts([...products, {...product, quantity: 1}]);
    }

    const toggleCart = () => {
        setIsVisible(!isVisible);
    }

    return (
        <CartContext.Provider value={{isVisible, products, toggleCart, addProductToCart}}>
            {children}
        </CartContext.Provider>
    );

}