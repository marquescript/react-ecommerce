import { useEffect, useState } from "react";
import { CategoriesContainer, CategoriesContent } from "./categories.style";
import { Category } from "../../types/Category";
import { CategoryItem } from "../category_item/CategoryItem";
import { getCategoriesFirebase } from "../../service/category-service";

export const Categories = () => {

    const [categories, setCategories] = useState<Category[]>([]);

    const getCategories = async () => {
        const data = await getCategoriesFirebase();
        setCategories(data || []);
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <CategoriesContainer>
            <CategoriesContent>

                {categories.map(category => (
                    <div key={category.id}>
                        <CategoryItem category={category} />
                    </div>
                ))}

            </CategoriesContent>
        </CategoriesContainer>
    );

}