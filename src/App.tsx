import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/login/LoginPage";
import { SignUpPage } from "./pages/sign_up/SignUpPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { getUserFirebase } from "./service/user-service";

const App = () => {

  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {

    //se o usuario estiver logado no contexto e nao estiver no firebase
    if(isAuthenticated && !user){
      return logoutUser();
    }

    //se o usuario estiver nulo no contexto e nao estiver nulo no firebase
    if(!isAuthenticated && user){
      const fetchedUser  = await getUserFirebase(user);
      return loginUser(fetchedUser as any);
    }

  })

  
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/sign-up" element={<SignUpPage />} />

        </Routes>
      </BrowserRouter>

    </>
  );
  
}

export default App
