import { AuthError, AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../config/firebase"
import { SignUpForm } from "../types/SignUpForm"
import { addDoc, collection } from "firebase/firestore";

const FormErrorKeys = {
    email: "email" as keyof SignUpForm,
    name: "name" as keyof SignUpForm,
    lastName: "lastName" as keyof SignUpForm,
    password: "password" as keyof SignUpForm,
    confirmPassword: "confirmPassword" as keyof SignUpForm,
};

interface FormError {
    campo: keyof SignUpForm;
    type: string;
}

export const createUserFirebase = async (data: SignUpForm): Promise<null | FormError> => {
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password);

        await addDoc(collection(db, "users"), {
            id: userCredentials.user.uid,
            name: data.name,
            lastName: data.lastName,
            email: userCredentials.user.email
        });

        return null;

    }catch (error){
        const _error = error as AuthError;
        
        if(_error.code === AuthErrorCodes.EMAIL_EXISTS){
            return {campo: FormErrorKeys.email, type: "alreadyInUse"};
        }

        return null;
    }
}