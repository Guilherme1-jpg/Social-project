import logo from "./logo.svg";
import NavbarToggle from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./product/pages/home";
import RoutesConfig from "./_config/Routes";

function App() {
  return (
    <>
      <NavbarToggle />
      <RoutesConfig />
      <Footer />
    </>
  );
}

export default App;
