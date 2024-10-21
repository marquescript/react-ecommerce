import { Category } from "../../types/Category";
import { CategoryItemContainer, CategoryName } from "./category_item.style";

export const CategoryItem = ({category}: {category: Category}) => {

    return (
        <CategoryItemContainer backgroundImage={category.imageUrl}>
            <CategoryName>
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </CategoryName>
        </CategoryItemContainer>
    );

}