import { useContext, useEffect } from "react";
import { Container } from "./categories_overview.style";
import { CategoryContext } from "../../contexts/CategoryContext";


export const CategoriesOverview = () => {

    const { categories, getCategories } = useContext(CategoryContext);

    useEffect(() => {
        if(categories.length === 0) getCategories();
    }, []);


    return (
        <>
            <Container>
                {categories.map((category) => (
                    <p>{category.displayName}</p>
                ))}
            </Container>
        </>
    );

}