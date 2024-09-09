import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbars from "./components/Navbars";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>

      <Footer />
    </>
  );
}

export default App;
