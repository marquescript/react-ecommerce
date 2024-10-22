import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/login/LoginPage";
import { SignUpPage } from "./pages/sign_up/SignUpPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

const App = () => {

  onAuthStateChanged(auth, (user) => {
    console.log(user);
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
