import { useParams } from "react-router-dom";
import { CategoryDetails } from "../../components/category_details/CategoryDetails";
import { Header } from "../../components/header/Header";


export const CategoryDetailsPage = () => {

    const { id } = useParams();

    if(!id) return null;

    return (
        <>
            <Header />
            <CategoryDetails categoryId={id} />
        </>
    );

}