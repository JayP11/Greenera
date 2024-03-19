import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./common/navbar/Navbar";
import Footer from "./common/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>{" "}
        <Route path="/Contact" element={<Contact />}></Route>{" "}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
