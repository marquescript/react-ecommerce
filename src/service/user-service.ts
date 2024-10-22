import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../config/firebase"
import { SignUpForm } from "../types/SignUpForm"
import { addDoc, collection } from "firebase/firestore";

export const createUserFirebase = async (data: SignUpForm) => {
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password);

        await addDoc(collection(db, "users"), {
            id: userCredentials.user.uid,
            name: data.name,
            lastName: data.lastName,
            email: userCredentials.user.email
        });
    }catch (err){

    }
}