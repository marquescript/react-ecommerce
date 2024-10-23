import { createContext, ReactNode, useState } from "react";
import { Category } from "../types/Category";
import { getCategoriesFirebase } from "../service/category-service";

interface ICategoryContext {
    categories: Category[];
    getCategories: () => Promise<void>;
}

export const CategoryContext = createContext<ICategoryContext>({
    categories: [],
    getCategories: () => Promise.resolve()
});

export const CategoryContextProvider = ({children}: {children: ReactNode}) => {

    const [categories, setCategories] = useState<Category[]>([]);

    const getCategories = async () => {
        const data = await getCategoriesFirebase();
        setCategories(data || []);
    }

    return (
        <CategoryContext.Provider value={{categories, getCategories}}>
            {children}
        </CategoryContext.Provider>
    )
}