import "./App.css";
import SideNav from "./components/SideNav";
import Home from "./components/HomePage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <SideNav title="Contact" />
      <Home />
      <Footer />
    </>
  );
}

export default App;
