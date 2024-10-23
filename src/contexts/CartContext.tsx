import { createContext, ReactNode, useState } from "react";
import { Cart } from "../types/Cart";

interface ICartContext {
    isVisible: boolean;
    toggleCart: () => void;
    products: Cart[];
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => {}
});

export const CartContextProvider = ({children}: {children: ReactNode}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [products, setProducts] = useState<Cart[]>([]);

    const toggleCart = () => {
        setIsVisible(!isVisible);
    }

    return (
        <CartContext.Provider value={{isVisible, products, toggleCart}}>
            {children}
        </CartContext.Provider>
    );

}