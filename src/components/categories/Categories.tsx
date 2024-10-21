import { useState } from "react";
import { CategoriesContainer, CategoriesContent } from "./categories.style";
import { Category } from "../../types/Category";

export const Categories = () => {

    const [categories, setCategories] = useState<Category[]>([]);


    return (
        <CategoriesContainer>
            <CategoriesContent>

                {categories.map(category => (
                    <div>categoria</div>
                ))}

            </CategoriesContent>
        </CategoriesContainer>
    );

}