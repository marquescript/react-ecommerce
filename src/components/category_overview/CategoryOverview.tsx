import { Category } from "../../types/Category";
import { ProductItem } from "../product_item/ProductItem";
import { CategoryContainer, CategoryTitle, ProductsContainer } from "./category_overview.style";


interface CategoryOverviewProps{
    category: Category
}

export const CategoryOverview = ({category}: CategoryOverviewProps) => {


    return (
        <>
            <CategoryContainer>
                <CategoryTitle>{category.displayName}</CategoryTitle>
                <ProductsContainer>
                    {category?.products.slice(0, 4).map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))}
                </ProductsContainer>
            </CategoryContainer>
        </>
    );

}