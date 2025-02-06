import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Home from "./pages/home/index.tsx";
import CategoriesPage from "./pages/categories/index.tsx";
import CategoryProductsPage from "./pages/categories/products/index.tsx";
import AdminPage from "./pages/admin/index.tsx";
import ProductPage from "./pages/product/index.tsx";
import CartPage from "./pages/cart/index.tsx";
import CheckoutPage from "./pages/checkout/index.tsx";
gsap.registerPlugin(useGSAP);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:id" element={<CategoryProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
