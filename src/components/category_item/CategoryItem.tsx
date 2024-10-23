import { useNavigate } from "react-router-dom";
import { Category } from "../../types/Category";
import { CategoryItemContainer, CategoryName } from "./category_item.style";

export const CategoryItem = ({category}: {category: Category}) => {

    const navigate = useNavigate();

    const handleExploreClick = () => {
        navigate(`/category/${category.id}`)
    }

    return (
        <CategoryItemContainer backgroundImage={category.imageUrl}>
            <CategoryName onClick={handleExploreClick}>
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </CategoryName>
        </CategoryItemContainer>
    );

}