import { collection, getDocs } from "firebase/firestore"
import { db } from "../config/firebase"
import { Category } from "../types/Category";
import { categoryConverter } from "../converters/firestore";

export const getCategoriesFirebase = async () => {
    try{
        const categoriesFirestore: Category[] = [];
        const querySnapshot = await getDocs(collection(db, "categories").withConverter(categoryConverter));
        querySnapshot.forEach((doc) => {
            categoriesFirestore.push(doc.data());
        });
        return categoriesFirestore;
    }catch (err){

    }
}