import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { LoginForm } from "./containers/login&Registration/LoginForm";
import { SignUpForm } from "./containers/login&Registration/SignUpForm";
import { ProductList } from "./components/productList/ProductList";
import { Error404 } from "./components/Error404";
import { ProductPage } from "./containers/ProductPage";

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
