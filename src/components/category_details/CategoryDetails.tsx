import { useEffect, useState } from "react";
import { Category } from "../../types/Category";
import { getCategoryFirebase } from "../../service/category-service";
import { CategoryTitle, Container, IconContainer, ProductsContainer } from "./category_details.style";
import { BiChevronLeft } from "react-icons/bi";
import { ProductItem } from "../product_item/ProductItem";
import { useNavigate } from "react-router-dom";


export const CategoryDetails = ({categoryId}: {categoryId: string}) => {

    const [category, setCategory] = useState<Category | null>(null);
    const navigate = useNavigate();

    const getCategory = async () => {
        const categoryFetch = await getCategoryFirebase(categoryId);
        if(categoryFetch != null){
            setCategory(categoryFetch);
        }
    }

    const handleBackHome = () => {
        navigate("/");
    }

    useEffect(() => {
        getCategory();
    }, []);

    if(!category) return null;

    return (
        <>
        <Container>

            <CategoryTitle>
                <IconContainer>
                    <BiChevronLeft onClick={handleBackHome} size={36} />
                </IconContainer>
                <p>Explorar {category?.displayName}</p>
            </CategoryTitle>

            <ProductsContainer>
                {category.products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                ))}
            </ProductsContainer>
            
        </Container>
        </>
    );

}