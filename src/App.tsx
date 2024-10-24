import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/login/LoginPage";
import { SignUpPage } from "./pages/sign_up/SignUpPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import { getUserFirebase } from "./service/user-service";
import { CheckoutGuard, LoggedInGuard } from "./guards/Guards";
import { ExplorePage } from "./pages/explorer/ExplorePage";
import { CategoryDetailsPage } from "./pages/category_details/CategoryDetailsPage";
import { Cart } from "./components/cart/Cart";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";

const App = () => {

  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

    onAuthStateChanged(auth, async (user) => {

    if(isAuthenticated && !user){
      logoutUser();
      return setIsCheckingAuth(false);
    }

    if(!isAuthenticated && user){
      const fetchedUser  = await getUserFirebase(user);
      loginUser(fetchedUser);
      return setIsCheckingAuth(false);
    }

    return setIsCheckingAuth(false);

  })

  if(isCheckingAuth) return null;
  
  return (
    <>

      <BrowserRouter>
      
        <Routes>

          <Route path="/" element={<HomePage />}/>

          <Route element={
            <LoggedInGuard isAuthenticated={isAuthenticated} />}>
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route path="/category/:id" element={<CategoryDetailsPage />}/>
          <Route path="/explore" element={<ExplorePage />} />

            <Route element={<CheckoutGuard isAuthenticated={isAuthenticated} />}>
              <Route path="/checkout" element={<CheckoutPage />} />
            </Route>

            
          </Routes>

        <Cart />
      </BrowserRouter>

    </>
  );
  
}

export default App
