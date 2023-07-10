import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { LoginForm } from "./pages/LoginForm";
import { SignUpForm } from "./pages/SignUpForm";
import { ProductList } from "./pages/ProductList";
import { Error404 } from "./pages/Error404";
import { ProductPage } from "./pages/ProductPage";

const RouteSwitch = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="registration" element={<SignUpForm />} />
        <Route path="All" element={<ProductList category="All"/>}/>
        
        <Route path="PC" element={<ProductList category="PC" />}/>
        <Route path="PC/:productId" element={<ProductPage/>}/>
        <Route path="Laptop" element={<ProductList category="Laptop" />}/>
        <Route path="Laptop/:productId" element={<ProductPage/>}/>
        <Route path="Smartphone" element={<ProductList category="Smartphone" />}/>
        <Route path="Smartphone/:productId" element={<ProductPage/>}/>
        <Route path="Accessories" element={<ProductList category="Accessories" />}/>
        <Route path="Accessories/:productId" element={<ProductPage/>}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export { RouteSwitch };
