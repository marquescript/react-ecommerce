import { Category } from "../../types/Category";
import { CategoryContainer, CategoryTitle, ProductsContainer } from "./category_overview.style";


interface CategoryOverviewProps{
    category: Category
}

export const CategoryOverview = ({category}: CategoryOverviewProps) => {


    return (
        <>
            <CategoryContainer>
                <CategoryTitle>{category.displayName}</CategoryTitle>
                <ProductsContainer></ProductsContainer>
            </CategoryContainer>
        </>
    );

}