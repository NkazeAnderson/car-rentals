import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Home from "./pages/home/index.tsx";
gsap.registerPlugin(useGSAP);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
