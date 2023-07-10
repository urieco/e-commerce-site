import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { LoginForm } from "./pages/LoginForm";
import { SignUpForm } from "./pages/SignUpForm";
import { ProductList } from "./pages/ProductList";
import { Error404 } from "./pages/Error404";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<SignUpForm />} />
        <Route path="/All" element={<ProductList category="All"/>}/>
        
        <Route path="/PC" element={<ProductList category="PC" />}/>
        <Route path="/Laptop" element={<ProductList category="Laptop" />}/>
        <Route path="/Smartphone" element={<ProductList category="Smartphone" />}/>
        <Route path="/Accessories" element={<ProductList category="Accessories" />}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export { RouteSwitch };
