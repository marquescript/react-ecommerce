import { useContext, useEffect } from "react";
import { CategoriesContainer, CategoriesContent } from "./categories.style";
import { CategoryItem } from "../category_item/CategoryItem";
import { CategoryContext } from "../../contexts/CategoryContext";

export const Categories = () => {

    const { categories, getCategories } = useContext(CategoryContext);

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