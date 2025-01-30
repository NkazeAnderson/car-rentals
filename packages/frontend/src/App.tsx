import { Outlet } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
