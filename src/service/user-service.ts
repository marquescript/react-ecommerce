import { AuthError, AuthErrorCodes, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth, db, googleProvider } from "../config/firebase"
import { SignUpForm } from "../types/SignUpForm"
import { addDoc, collection, DocumentData, getDoc, getDocs, query, where } from "firebase/firestore";
import { LoginForm } from "../types/LoginForm";
import { userConverter } from "../converters/firestore";
import { User } from "../types/User";

const SignUpFormErrorKeys = {
    email: "email" as keyof SignUpForm,
    name: "name" as keyof SignUpForm,
    lastName: "lastName" as keyof SignUpForm,
    password: "password" as keyof SignUpForm,
    confirmPassword: "confirmPassword" as keyof SignUpForm,
};

const LoginFormErrorKeys = {
    email: "email" as keyof LoginForm,
    password: "password" as keyof LoginForm,
}

interface SignUpFormError {
    campo: keyof SignUpForm;
    type: string;
}

interface LoginFormError {
    campo: keyof LoginForm;
    type: string;
}


export const createUserFirebase = async (data: SignUpForm): Promise<null | SignUpFormError> => {
    try{
        const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password);

        await addUserInFirestore(userCredentials, data);

        return null;

    }catch (error){
        const _error = error as AuthError;
        
        if(_error.code === AuthErrorCodes.EMAIL_EXISTS){
            return {campo: SignUpFormErrorKeys.email, type: "alreadyInUse"};
        }

        return null;
    }
}

export const loginFirebase = async (data: LoginForm): Promise<null | LoginFormError> => {
    try{
         await signInWithEmailAndPassword(auth, data.email, data.password);

        return null;
    }catch(error){
        const _error = error as AuthError;

        if (_error.code === AuthErrorCodes.USER_DELETED){
            return {campo: LoginFormErrorKeys.email, type: "user-not-found"}
        }
        if (_error.code === AuthErrorCodes.INVALID_PASSWORD){
            return {campo: LoginFormErrorKeys.password, type: "mismatch"}
        }
        if (_error.code === 'auth/too-many-requests'){
            return {campo: LoginFormErrorKeys.email, type: "too-many-requests"}
        }
        if (_error.code === 'auth/invalid-credential'){
            return {campo: LoginFormErrorKeys.email, type: "invalid-credential"}
        }

        return null;
    }
}

export const loginWithGoogleProviderFirebase = async () => {
    try{
        const userCredentials = await signInWithPopup(auth, googleProvider);

        const user = await verifyUserExistsFirebase(userCredentials);

        if(!user){
            addUserInFirestore(userCredentials);
        }

    }catch(error){

    }
}

const verifyUserExistsFirebase = async (userCredentials: any) => {
    const querySnapshot = await getDocs(query(collection(db, "users"), where("id", "==", userCredentials.user.uid)))
    return querySnapshot.docs[0]?.data();
}


const addUserInFirestore = async (userCredentials: any, data?: SignUpForm) => {

    let name = "";
    let lastName = "";

    if(!data){
        name = userCredentials.user.displayName?.split(" ")[0];
        lastName = userCredentials.user.displayName?.split(" ")[1];
    }else {
        name = data.name;
        lastName = data.lastName;
    }

    await addDoc(collection(db, "users"), {
        id: userCredentials.user.uid,
        name,
        lastName,
        email: userCredentials.user.email,
    });
}

export const getUserFirebase = async (user: DocumentData) => {
    const querySnapshot = await getDocs(query(collection(db, "users").withConverter(userConverter), where("id", "==", user.uid)));
    return querySnapshot.docs[0]?.data();
}

export const signOutFirebase = () => {
    signOut(auth);
}