import { Outlet } from "react-router";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AppContextProvider from "./components/contextProviders/AppContextProvider";
function App() {
  return (
    <>
      <AppContextProvider>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </AppContextProvider>
    </>
  );
}

export default App;
