import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../index.css";
import { HomePage } from "./pages/home/HomePage";

const App = () => {
  
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />}/>

        </Routes>
      </BrowserRouter>

    </>
  );
  
}

export default App
