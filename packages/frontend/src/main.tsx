import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Home from "./pages/home/index.tsx";
import CategoriesPage from "./pages/categories/index.tsx";
import CategoryProductsPage from "./pages/categories/products/index.tsx";
gsap.registerPlugin(useGSAP);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:id" element={<CategoryProductsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
