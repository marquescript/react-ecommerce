import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { Cart } from "../types/Cart";
import { Product } from "../types/Product";

interface ICartContext {
    isVisible: boolean;
    totalPrice: number;
    totalQuantity: number;
    toggleCart: () => void;
    products: Cart[];
    addProductToCart: (product: Product) => void;
    removeProductFromCart: (productId: string) => void;
    addQuantityProductFromCart: (productId: string) => void;
    removeQuantityProductFromCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    totalPrice:  0,
    totalQuantity: 0,
    products: [],
    toggleCart: () => {},
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    addQuantityProductFromCart: () => {},
    removeQuantityProductFromCart: () => {}
});

export const CartContextProvider = ({children}: {children: ReactNode}) => {

    const [products, setProducts] = useState<Cart[]>(() => {
        const storedProducts = localStorage.getItem("cartProducts");
        return storedProducts ? JSON.parse(storedProducts) : [];
    });

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(products));
    }, [products]);

    const totalPrice = useMemo(() => {
        return products.reduce((acc, current) => {
            return acc + current.price * current.quantity;
        }, 0)
    }, [products]);

    const totalQuantity = useMemo(() => {
        return products.reduce((acc, current) => {
            return acc + current.quantity;
        }, 0);
    }, [products]);

    const addProductToCart = (product: Product) => {
        const productInCart = products.some((item) => item.id === product.id);
        if (productInCart) {
            const newProducts = products.map(item => 
                item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
            return setProducts(newProducts);
        }
        setProducts([...products, {...product, quantity: 1}]);
    }

    const removeProductFromCart = (productId: string) => {
        setProducts((products) => products.filter((product) => product.id !== productId));
    }

    const addQuantityProductFromCart = (productId: string) => {
        const newProducts = products.map(product => 
            product.id === productId ? {...product, quantity: product.quantity + 1} : product);
        setProducts(newProducts);
    }

    const removeQuantityProductFromCart = (productId: string) => {
        const newProducts = products.map(product => {
            if (product.id === productId) {
                const updatedProduct = { ...product, quantity: product.quantity - 1 };

                if (updatedProduct.quantity === 0) {
                    removeProductFromCart(productId);
                    return null;
                }

                return updatedProduct;
            }

            return product;
        }).filter(product => product !== null);

        setProducts(newProducts);
    };

    const toggleCart = () => {
        setIsVisible(!isVisible);
    }

    return (
        <CartContext.Provider value={{
            isVisible, 
            products, 
            toggleCart, 
            addProductToCart, 
            removeProductFromCart, 
            addQuantityProductFromCart, 
            removeQuantityProductFromCart,
            totalPrice,
            totalQuantity
        }}>
            {children}
        </CartContext.Provider>
    );
}
