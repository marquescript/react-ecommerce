import { collection, getDocs, query, where } from "firebase/firestore"
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

export const getCategoryFirebase = async (categoryId: string) => {
    try{
        const querySnapshot = await getDocs(query(collection(db, "categories").withConverter(categoryConverter), 
            where("id", "==", categoryId)));
        return querySnapshot.docs[0]?.data();

    }catch(error){
        console.log(error);
    }
}