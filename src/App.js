import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Tarpaulin from "./pages/singleProduct/tarpaulin/Tarpaulin";
import Products from "./products/Products";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>{" "}
        <Route path="/Contact" element={<Contact />}></Route>{" "}
        <Route path="/About" element={<About />}></Route>{" "}
        <Route path="/Products" element={<Products />}></Route>{" "}
        <Route path="/Tarpaulin" element={<Tarpaulin />}></Route>{" "}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
