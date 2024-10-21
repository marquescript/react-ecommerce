import { useState } from "react";
import { CategoriesContainer, CategoriesContent } from "./categories.style";
import { Category } from "../../types/Category";
import { CategoryItem } from "../category_item/CategoryItem";

export const Categories = () => {

    const [categories, setCategories] = useState<Category[]>([]);


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